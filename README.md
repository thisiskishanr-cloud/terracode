# 🌱 Green Tomorrow — Building a Sustainable Future

> **TERRACODE 2026 Submission**  
> **Theme:** Green Tomorrow – Building a Sustainable Future  
> **Organiser:** FOSS Club, Department of Computer Science & Engineering, MEA Engineering College  
> **Submission Deadline:** 10 November 2026  
> **License:** Open Source (MIT)

---

## 📌 Table of Contents
1. [Overview & Concept](#-overview--concept)
2. [Theme Alignment: Green Tomorrow](#-theme-alignment-green-tomorrow)
3. [Interactive Story Chapters](#-interactive-story-chapters)
4. [Technology Stack & FOSS Tools](#-technology-stack--foss-tools)
5. [Verified Scientific Data Sources](#-verified-scientific-data-sources)
6. [UI/UX & Responsive Engineering](#-uiux--responsive-engineering)
7. [Repository Structure](#-repository-structure)
8. [Local Development & Quick Start](#-local-development--quick-start)
9. [Pre-Submission Verification Checklist](#-pre-submission-verification-checklist)

---

## 🌍 Overview & Concept

**Green Tomorrow** is an immersive, editorial-documentary web experience dedicated to regional ecological conservation, biodiversity preservation, and clean energy innovation with a special focus on the **Western Ghats of Kerala**—one of the world's eight "hottest hotspots" of biological diversity.

Rather than presenting passive text, the platform engages students, researchers, and citizens through **real-time 3D WebGL specimens**, **interactive geospatial mapping**, **empirical river water monitoring stations**, and **kinetic clean-energy orbital galleries**. It bridges grassroots local action with global ecological stewardship.

---

## 🌿 Theme Alignment: Green Tomorrow

The project addresses multiple pillars of the **Green Tomorrow – Building a Sustainable Future** theme:

| Thematic Pillar | Implementation in Green Tomorrow |
| :--- | :--- |
| **Clean Energy & Decarbonisation** | Interactive 3D Offshore Wind Turbine specimen with dynamic PBR lighting and an 8-stage bounded **Orbital Wheel** detailing modern renewable microgrids, tidal rotors, and agrivoltaics. |
| **Biodiversity & Local Nature** | Highlighting endemic flora and fauna of the Western Ghats (Malabar Giant Squirrel, Lion-tailed Macaque, Great Indian Hornbill, Neelakurinji) via a responsive **Accordion Gallery**. |
| **Open Data & Climate Advocacy** | Empirical water quality station monitoring pH, Dissolved Oxygen (DO), Turbidity, Temperature, Conductivity, and Nitrates across 4 critical Kerala river basins based on KSPCB baseline standards. |
| **Geospatial Ecological Intelligence** | Interactive Leaflet GIS map visualizing protected reserves, fragile mangrove buffer corridors, and priority rewilding sectors across Kozhikode and Malabar. |
| **Global Perspective** | Interactive 3D Earth specimen embedded within the "Protect Our WORLD" typographical finale, connecting local conservation with planetary equilibrium. |

---

## 📖 Interactive Story Chapters

The application is structured as a continuous vertical documentary journey across 8 narrative chapters:

```
[ Hero: 3D Tree Specimen ] 
       ↓
[ Ch. 01: The Beginning ] ── Deep ecological origin of the Western Ghats
       ↓
[ Ch. 02: Biodiversity Pillars ] ── Four core systemic vectors of regional ecology
       ↓
[ Ch. 03: Species Accordion Gallery ] ── Interactive expanding guide with IUCN statuses
       ↓
[ Ch. 04: Spatial Intelligence ] ── Interactive Leaflet GIS map of reserves & corridors
       ↓
[ Ch. 05: Environmental Challenges ] ── Fragmentation, invasive species, and climate stress
       ↓
[ Ch. 06: Water Monitoring Station ] ── Multi-basin river chemistry dashboard (pH, DO, Nitrates)
       ↓
[ Ch. 07: Clean Energy & 3D Turbine ] ── Floating 3D wind turbine + bounded orbital wheel
       ↓
[ Ch. 08: Global Future & 3D Earth ] ── Interactive Earth typography climax & call to action
```

### Key Highlights
- **Chapter 00 • Hero 3D Specimen**: Realistic 3D Shola forest tree rendered with Three.js, directional sunlight shadows, soft camera orbit damping, and loading progress indicators.
- **Chapter 03 • Local Species Guide**: A responsive GSAP-powered horizontal accordion with 3D panel tilt, parallax image drift, and inline IUCN status indicators.
- **Chapter 04 • Spatial Cartography**: Leaflet.js interactive map featuring custom SVG botanical markers, protected area boundaries, and detailed micro-ecosystem telemetry.
- **Chapter 06 • Water Quality Benchmarks**: Dynamic river selector comparing Kadalundi Estuary, Chaliyar River, Kallai Canal, and Kakkayam Reservoir across 6 empirical health metrics.
- **Chapter 07 • Clean Energy Orbital Wheel & 3D Turbine**: Non-infinite bounded scroll wheel presenting 8 decarbonisation solutions paired with a 3D animated offshore wind turbine on a floating bio-island.
- **Chapter 08 • Typography Stage**: 3D photorealistic Earth specimen seamlessly integrated into the typographic wordmark `W[O]RLD` with drag-to-inspect rotation.

---

## 🛠 Technology Stack & FOSS Tools

In adherence to the **FOSS Club** guidelines prioritizing open-source tools:

- **Core Runtime**: Plain **Vanilla HTML5**, **Modern CSS3**, and **ES6 Modules** — no heavy build frameworks, node runtimes, or compilation steps required.
- **3D Graphics**: [Three.js](https://threejs.org/) (r164) with `GLTFLoader`, `DRACOLoader`, `OrbitControls`, `RoomEnvironment`, and `ACESFilmicToneMapping` for photorealistic PBR rendering.
- **Geospatial Mapping**: [Leaflet.js](https://leafletjs.com/) (v1.9.4) for lightweight, privacy-focused open interactive cartography.
- **Kinetic Animations**: [GSAP (GreenSock)](https://gsap.com/) for hardware-accelerated GPU transitions and fluid accordion expansion.
- **Asset Standards**: glTF 2.0 Binary (`.glb`) for optimal compression and rapid WebGL geometry streaming.

---

## 📊 Verified Scientific Data Sources

In compliance with the organiser's requirement: *"You must understand your code and verify your facts"*:

1. **IUCN Red List of Threatened Species (2024–2026)**: Baseline conservation statuses for *Ratufa indica*, *Macaca silenus*, *Nasikabatrachus sahyadrensis*, and *Rhacophorus malabaricus*.
2. **Kerala State Pollution Control Board (KSPCB)**: Seasonal empirical water quality indices for the Chaliyar, Kallai, and Kadalundi river systems.
3. **IPBES Global Assessment Report on Biodiversity (2019)**: Global biodiversity loss vectors and ecological tipping point thresholds.
4. **Botanical Survey of India (BSI) & Zoological Survey of India (ZSI)**: Western Ghats floral endemism metrics and Shola-grassland ecosystem documentation.

---

## 🎨 UI/UX & Responsive Engineering

- **Editorial Documentary Aesthetic**: Inspired by National Geographic and high-end scientific journals, utilizing `Playfair Display` for editorial gravitas, `Outfit` for modern data displays, and `Plus Jakarta Sans` for body legibility.
- **Color Palette**: Botanical emerald (`#047857`), deep forest pine (`#0D2E22`), ivory canvas (`#F7F8F3`), and glassmorphic translucent panels.
- **Cross-Device Fluidity**: Fully tested and optimized with CSS `clamp()`, dynamic viewport units (`dvh`), and responsive breakpoints for mobile handsets, tablets, laptops, and ultra-wide desktops.
- **Non-blocking Scroll Architecture**: Bounded orbital wheels and canvas controls automatically release scroll lock when reaching boundaries or when the section is partially out of viewport.

---

## 📁 Repository Structure

```
terracode-environ/
├── index.html                   # Core single-page application entry point
├── README.md                    # Project documentation & judging guide
├── LICENSE                      # MIT Open-Source License
├── .gitignore                   # Standard OS & editor exclusions
├── assets/
│   ├── models/
│   │   ├── tree.glb             # 3D Shola forest tree specimen
│   │   └── wind-turbine.glb     # 3D offshore wind turbine specimen
│   └── textures/
│       └── earth-texture.jpg    # High-resolution spherical Earth texture
├── css/
│   ├── accordion-gallery.css    # Styles for the expanding species gallery
│   └── orbital-image-wheel.css  # Styles for the clean energy orbital wheel
└── js/
    ├── accordion-gallery.js     # GSAP-driven interactive accordion module
    └── orbital-image-wheel.js   # Bounded wheel scrolling & kinetic transform logic
```

---

## 🚀 Local Development & Quick Start

Because the project relies on native ES6 modules and WebGL assets, it should be served via a local HTTP server rather than `file://`:

### Option A: Using Python (Pre-installed on macOS/Linux/Windows)
```bash
# Clone the repository
git clone <your-repo-url>
cd terracode-environ

# Start a lightweight local server on port 8080
python3 -m http.server 8080
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Option B: Using Node.js / npx
```bash
npx serve .
```

### Option C: VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## ✅ Pre-Submission Verification Checklist

- [x] **Theme Fit**: Fully addresses *Green Tomorrow – Building a Sustainable Future* (Clean Energy, Biodiversity, Open Data).
- [x] **Repository Public**: Ready to be pushed to a public GitHub repository.
- [x] **Clean Architecture**: All unused assets, test files, and duplicate models purged.
- [x] **Meaningful Filenames**: Assets and scripts organized into `assets/`, `css/`, and `js/` with semantic names.
- [x] **Zero Build Steps**: Runs immediately in any modern browser without npm dependencies.
- [x] **Interactive & Functional**: All 3D canvases, Leaflet maps, accordion panels, and orbital wheels tested and operating smoothly.
- [x] **Responsive**: Optimized across mobile phones, tablets, laptops, and large monitors.
- [x] **Accurate Sourcing**: All scientific metrics, IUCN statuses, and water indicators cited from verified authorities.
- [x] **Open Source License**: MIT License included.

---

*Submitted for **TERRACODE 2026** — FOSS Club, Department of Computer Science & Engineering, MEA Engineering College.*

