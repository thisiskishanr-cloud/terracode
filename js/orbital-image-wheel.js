/**
 * OrbitalImageWheel - Non-infinite bounded scroll module
 * Widescreen landscape cards (1 to 8), smooth GPU compositing,
 * seamless handoff to webpage scroll at ends (cards 1 and 8).
 */

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function initOrbitalImageWheel(container, options = {}) {
  if (!container) return null;

  const {
    items = [],
    defaultSelected = 0,
    radius = 350,
    cardWidth = 420,
    cardHeight = 195,
    scaleEffect = 0.08,
    smoothing = 35,
    onChange = null
  } = options;

  const n = items.length;
  if (n === 0) return null;

  container.classList.add('orbital-wheel-container');
  container.setAttribute('role', 'region');
  container.setAttribute('aria-label', 'Clean Energy Methods Orbital Wheel');
  container.setAttribute('tabindex', '0');

  // Build DOM: Stage for Widescreen 3D cards ONLY (pill bar completely removed)
  container.innerHTML = `
    <div class="orbital-wheel-stage" id="oiw-stage">
      ${items.map((item, i) => `
        <figure class="oiw-card${i === defaultSelected ? ' oiw-card--active' : ''}" data-index="${i}" style="width: ${cardWidth}px; height: ${cardHeight}px;">
          <div class="oiw-card-bg" style="background-image: url('${item.src}');"></div>
          <div class="oiw-card-scrim">
            <div class="oiw-card-top">
              <span class="oiw-card-tag">${item.subtitle ? item.subtitle.split('•')[0].trim() : `METHOD 0${i + 1}`}</span>
              ${item.metric ? `<span class="oiw-card-metric">${item.metric}</span>` : ''}
            </div>
            <div class="oiw-card-bottom">
              <h4 class="oiw-card-title">${item.label || `Method ${i + 1}`}</h4>
              ${item.desc ? `<p class="oiw-card-desc">${item.desc}</p>` : ''}
            </div>
          </div>
          <div class="oiw-card-dim" style="opacity: 0;"></div>
        </figure>
      `).join('')}
    </div>
  `;

  const stage = container.querySelector('.orbital-wheel-stage');
  const cardEls = Array.from(stage.querySelectorAll('.oiw-card'));
  const cardDims = Array.from(stage.querySelectorAll('.oiw-card-dim'));

  let pos = defaultSelected;
  let target = defaultSelected;
  let activeIndex = defaultSelected;
  let rafId = null;
  let lastTime = performance.now();
  let dragStart = null;
  let dragMoved = false;
  let wheelTimer = null;

  // Center of curvature: on the right (around the windmill)
  // Focus anchor: PI (180 deg, facing the left column)
  const focusAnchor = Math.PI;
  const stepAngle = Math.PI / 4.75; // ~38 deg between adjacent cards

  function runFrame(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    const tau = Math.max(smoothing, 1) / 1000;
    const k = 1 - Math.exp(-dt / tau);

    let next = pos + (target - pos) * k;
    const settled = Math.abs(target - next) < 0.001;
    if (settled) next = target;
    pos = next;

    const stageWidth = stage.clientWidth || 540;
    const stageHeight = stage.clientHeight || 520;

    // Position focused card gracefully beside the turbine (no big empty gap, no collision)
    const focusX = Math.round(stageWidth - cardWidth / 2 - 45);
    const centerX = focusX + radius;
    const centerY = Math.round(stageHeight / 2);

    for (let i = 0; i < n; i++) {
      const card = cardEls[i];
      const cardDim = cardDims[i];
      if (!card) continue;

      // Non-infinite linear mapping along circular arc
      const diff = i - next;
      const theta = focusAnchor - diff * stepAngle;
      const dist = Math.abs(diff * stepAngle);

      // Orbital position relative to center of curvature (windmill)
      const x = centerX + Math.cos(theta) * radius;
      const y = centerY + Math.sin(theta) * radius;

      // Central active card vs adjacent receding cards (maximum central prominence):
      let opacity = 0;
      let darkIntensity = 0;
      let cardScale = 1.0;

      if (dist < 0.12) {
        // CENTRAL HERO CARD: 100% visible, elevated 1.06x scale, zero darkening
        opacity = 1.0;
        darkIntensity = 0.0;
        cardScale = 1.06;
      } else if (dist < 0.85) {
        // Immediate neighbor cards (exactly 1 top and 1 bottom)
        const t = (dist - 0.12) / 0.73;
        opacity = 1.0 - t * 0.32;
        darkIntensity = 0.15 + t * 0.35;
        cardScale = 1.06 - t * 0.18;
      } else {
        opacity = 0;
        cardScale = 0.82;
      }

      const depth = Math.round((1 - Math.min(dist, 1)) * 90);

      // Curvature tangent tilt
      const deltaY = y - centerY;
      const tilt = clamp(-deltaY / radius, -0.65, 0.65) * 12;

      // 100% GPU transform & opacity
      card.style.transform = `translate3d(${Math.round(x - cardWidth / 2)}px, ${Math.round(y - cardHeight / 2)}px, ${depth}px) rotate(${tilt.toFixed(2)}deg) scale(${cardScale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(3);
      card.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
      if (cardDim) {
        cardDim.style.opacity = darkIntensity.toFixed(2);
      }
      card.style.zIndex = dist < 0.15 ? 60 : depth;
      card.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';
    }

    if (!settled) {
      rafId = requestAnimationFrame(runFrame);
    } else {
      rafId = null;
    }
  }

  function startLoop() {
    if (rafId != null) cancelAnimationFrame(rafId);
    lastTime = performance.now();
    rafId = requestAnimationFrame(runFrame);
  }

  function applyTarget(v, snap = false) {
    let newTarget = clamp(v, 0, n - 1);
    if (snap) newTarget = Math.round(newTarget);
    target = newTarget;

    const newIdx = Math.round(newTarget);
    if (newIdx !== activeIndex) {
      activeIndex = newIdx;
      cardEls.forEach((c, idx) => c.classList.toggle('oiw-card--active', idx === newIdx));
      if (onChange) onChange(newIdx, items[newIdx]);
    }

    startLoop();
  }

  // Wheel handling: advances cards 0..n-1 ONLY when the whole section is visible on screen.
  // Reverts to normal webpage scroll once card 8 is reached (down) or card 1 is reached (up).
  // Instant, highly responsive discrete scroll: exactly 1 card per normal scroll gesture, zero lag.
  let wheelAccum = 0;
  let wheelResetTimer = null;
  const WHEEL_THRESHOLD = 50; // Crisp, instant scroll threshold for 1 card
  let isTransitioning = false;

  function handleWheel(e) {
    const parentSection = container.closest('.energy-conservation-section') || container;
    const rect = parentSection.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const delta = e.deltaY;

    // Lock card scrolling if only top part or bottom part of the section is visible.
    // Scroll cards ONLY when the section is visible completely on screen.
    const isCompletelyVisible = (rect.height <= vh)
      ? (rect.top >= -25 && rect.bottom <= vh + 25)
      : (rect.top <= 25 && rect.bottom >= vh - 25);

    if (!isCompletelyVisible) {
      return; // Locked: allow normal webpage scroll!
    }

    if (delta > 0) {
      // Scrolling down
      if (target >= n - 1 && pos >= n - 1.01) {
        // Card 8 reached -> allow normal page scroll down!
        return;
      }
      e.preventDefault();

      wheelAccum += delta;
      if (wheelAccum >= WHEEL_THRESHOLD && !isTransitioning) {
        isTransitioning = true;
        wheelAccum = 0;
        applyTarget(Math.min(n - 1, Math.round(target) + 1), true);
        setTimeout(() => { isTransitioning = false; }, 260);
      }
    } else if (delta < 0) {
      // Scrolling up
      if (target <= 0 && pos <= 0.01) {
        // Card 1 reached -> allow normal page scroll up!
        return;
      }
      e.preventDefault();

      wheelAccum += delta;
      if (wheelAccum <= -WHEEL_THRESHOLD && !isTransitioning) {
        isTransitioning = true;
        wheelAccum = 0;
        applyTarget(Math.max(0, Math.round(target) - 1), true);
        setTimeout(() => { isTransitioning = false; }, 260);
      }
    }

    clearTimeout(wheelResetTimer);
    wheelResetTimer = setTimeout(() => {
      wheelAccum = 0;
    }, 150);
  }

  // Register wheel on wheel container
  container.addEventListener('wheel', handleWheel, { passive: false });

  // Pointer drag events
  const onPointerDown = e => {
    dragStart = { y: e.clientY, target: target };
    dragMoved = false;
    container.classList.add('is-dragging');
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  const onPointerMove = e => {
    if (!dragStart) return;
    const dy = e.clientY - dragStart.y;
    if (Math.abs(dy) > 4) dragMoved = true;
    const step = -dy / 140;
    applyTarget(dragStart.target + step, false);
  };

  const onPointerUp = () => {
    if (!dragStart) return;
    dragStart = null;
    container.classList.remove('is-dragging');
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
    applyTarget(target, true);
  };

  container.addEventListener('pointerdown', onPointerDown);

  // Click on card snaps to center
  stage.addEventListener('click', e => {
    if (dragMoved) return;
    const card = e.target.closest('.oiw-card');
    if (!card) return;
    const idx = parseInt(card.dataset.index, 10);
    if (!isNaN(idx)) {
      applyTarget(idx, true);
    }
  });

  // Keyboard navigation
  container.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      if (target < n - 1) {
        e.preventDefault();
        applyTarget(target + 1, true);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      if (target > 0) {
        e.preventDefault();
        applyTarget(target - 1, true);
      }
    }
  });

  // Initial layout & run
  startLoop();

  // Resize handling
  const resizeObserver = new ResizeObserver(() => {
    startLoop();
  });
  resizeObserver.observe(container);

  return {
    destroy: () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (wheelTimer) clearTimeout(wheelTimer);
      if (wheelResetTimer) clearTimeout(wheelResetTimer);
      resizeObserver.disconnect();
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('wheel', handleWheel);
    },
    setActiveIndex: idx => {
      applyTarget(idx, true);
    },
    handleWheel
  };
}
