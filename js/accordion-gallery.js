/**
 * AccordionGallery - React Bits component in Vanilla JavaScript
 * Dependencies: GSAP
 */

export function initAccordionGallery(container, options = {}) {
  if (!container) return null;

  const {
    items = [],
    defaultIndex = 2,
    accentColor = '#10b981',
    overlayColor = '#021a12',
    textColor = '#ffffff',
    height = 480,
    gap = 12,
    radius = 20,
    expandRatio = 0.52,
    orientation = 'horizontal',
    duration = 0.6,
    ease = 'power3.out',
    parallax = 0.5,
    tilt = 8,
    stagger = 0.06,
    trigger = 'hover',
    showLabels = true,
    grayscale = true,
    className = '',
    onSelect = null,
    onDossier = null
  } = options;

  let currentItems = [...items];
  let count = currentItems.length;
  if (count === 0) return null;

  const vertical = orientation === 'vertical';
  let active = Math.min(Math.max(defaultIndex, 0), count - 1);
  let mediaSize = 320;
  let firstRun = true;
  let tl = null;

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  container.className = `accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`;
  container.style.setProperty('--ag-accent', accentColor);
  container.style.setProperty('--ag-overlay', overlayColor);
  container.style.setProperty('--ag-text', textColor);
  container.style.setProperty('--ag-gap', `${gap}px`);
  container.style.setProperty('--ag-radius', `${radius}px`);
  container.style.height = vertical ? `${Math.round(height * 1.6)}px` : `${height}px`;
  container.setAttribute('role', 'list');
  container.setAttribute('aria-label', 'Species Accordion Gallery');

  function renderDOM() {
    container.innerHTML = currentItems.map((item, i) => {
      const isActive = i === active;
      return `
        <div class="ag-panel${isActive ? ' ag-panel--active' : ''}"
             data-index="${i}"
             data-species="${item.speciesId || ''}"
             data-category="${item.category || ''}"
             style="border-radius: ${radius}px;"
             role="listitem"
             tabindex="0"
             aria-current="${isActive ? 'true' : 'false'}"
             aria-label="${item.label || ''}">
          <span class="ag-panel__frame">
            <span class="ag-panel__media">
              <img src="${item.image}" alt="${item.alt || item.label || ''}" draggable="false" />
            </span>
            <span class="ag-panel__overlay" aria-hidden="true"></span>
          </span>
          ${showLabels ? `
            <span class="ag-panel__label" aria-hidden="true">
              <span class="ag-panel__bar"></span>
              <span class="ag-panel__content">
                ${item.category ? `<span class="ag-panel__category">${item.category}</span>` : ''}
                <span class="ag-panel__text">${item.label || ''}</span>
                ${item.subtitle ? `<span class="ag-panel__subtext">${item.subtitle}</span>` : ''}
                ${item.highlight ? `<span class="ag-panel__highlight">${item.highlight}</span>` : ''}
              </span>
            </span>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  renderDOM();

  let panelEls = Array.from(container.querySelectorAll('.ag-panel'));
  let mediaEls = Array.from(container.querySelectorAll('.ag-panel__media'));
  let barEls = Array.from(container.querySelectorAll('.ag-panel__bar'));
  let textEls = Array.from(container.querySelectorAll('.ag-panel__content'));

  function applyLayout(animate) {
    if (!panelEls.length) return;
    const gsapInstance = window.gsap;
    if (!gsapInstance) return;

    const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
    const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;

    tl?.kill();
    const dur = animate && !prefersReduced ? duration : 0;
    tl = gsapInstance.timeline();

    panelEls.forEach((panel, i) => {
      if (!panel) return;
      const isActive = i === active;
      panel.classList.toggle('ag-panel--active', isActive);
      panel.setAttribute('aria-current', isActive ? 'true' : 'false');

      const media = mediaEls[i];
      const bar = barEls[i];
      const text = textEls[i];

      const rot = isActive ? 0 : i < active ? tilt : -tilt;
      const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

      tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

      if (media) {
        const drift = Math.max(-1.5, Math.min(1.5, active - i));
        const shift = drift * parallax * mediaSize * 0.06;
        const gray = grayscale ? (isActive ? 0 : 1) : 0;
        tl.to(
          media,
          {
            xPercent: -50,
            yPercent: -50,
            x: vertical ? 0 : isActive ? 0 : shift,
            y: vertical ? (isActive ? 0 : shift) : 0,
            '--ag-gray': gray,
            '--ag-dim': isActive ? 0 : 0.40,
            duration: dur,
            ease
          },
          0
        );
      }

      if (showLabels && bar && text) {
        if (isActive) {
          tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
        } else {
          tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.5, ease }, 0);
        }
      }
    });
  }

  function measure() {
    const rect = container.getBoundingClientRect();
    const total = vertical ? rect.height : rect.width;
    const usable = Math.max(total - gap * (count - 1), 120);
    const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.25);
    mediaSize = size;
    container.style.setProperty('--ag-media-size', `${size}px`);
    applyLayout(!firstRun);
  }

  function setActive(newIndex) {
    if (newIndex < 0 || newIndex >= count) return;
    active = newIndex;
    applyLayout(true);
    if (onSelect) onSelect(active, currentItems[active]);
  }

  function attachEvents() {
    panelEls.forEach((panel, i) => {
      if (trigger === 'hover') {
        panel.addEventListener('mouseenter', () => setActive(i));
      }
      panel.addEventListener('click', (e) => {
        const ctaClicked = e.target.closest('.ag-panel__cta');
        if (ctaClicked && onDossier) {
          e.stopPropagation();
          onDossier(currentItems[i]);
          return;
        }
        if (i !== active) {
          setActive(i);
        } else if (onDossier) {
          onDossier(currentItems[i]);
        }
      });
      panel.addEventListener('focus', () => setActive(i));
      panel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          setActive((i + 1) % count);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          setActive((i - 1 + count) % count);
        } else if (e.key === 'Enter' && onDossier) {
          onDossier(currentItems[i]);
        }
      });
    });
  }

  attachEvents();
  measure();

  const ro = new ResizeObserver(measure);
  ro.observe(container);

  setTimeout(() => {
    applyLayout(false);
    firstRun = false;
  }, 20);

  return {
    setActive,
    setItems: (newItems) => {
      currentItems = [...newItems];
      count = currentItems.length;
      active = Math.min(active, count - 1);
      renderDOM();
      panelEls = Array.from(container.querySelectorAll('.ag-panel'));
      mediaEls = Array.from(container.querySelectorAll('.ag-panel__media'));
      barEls = Array.from(container.querySelectorAll('.ag-panel__bar'));
      textEls = Array.from(container.querySelectorAll('.ag-panel__content'));
      attachEvents();
      measure();
      applyLayout(false);
    },
    destroy: () => {
      tl?.kill();
      ro.disconnect();
    }
  };
}

