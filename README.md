# 🌱 Green Tomorrow — Sustaining the Western Ghats

> **TERRACODE 2026 Submission**  
> **Theme:** Green Tomorrow – Building a Sustainable Future  
> **Organiser:** FOSS Club, Department of Computer Science & Engineering, MEA Engineering College  
> **Submission Deadline:** 10 November 2026  
> **License:** Open Source (MIT)  
> **Live Site:** [https://terracode-sooty.vercel.app/](https://terracode-sooty.vercel.app/)  
> **Repository:** [https://github.com/thisiskishanr-cloud/terracode](https://github.com/thisiskishanr-cloud/terracode)

---

## 📌 Table of Contents
1. [Overview & Project Summary](#-overview--project-summary)
2. [The Sustainability Problem & Theme Alignment](#-the-sustainability-problem--theme-alignment)
3. [Features & Interactive Architecture](#-features--interactive-architecture)
4. [Technology Stack & FOSS Library Credits](#-technology-stack--foss-library-credits)
5. [Verified Scientific Data Sources & Citations](#-verified-scientific-data-sources--citations)
6. [Repository Structure](#-repository-structure)
7. [Local Setup & Run Instructions](#-local-setup--run-instructions)
8. [Team Members](#-team-members)
9. [Screenshots & Previews](#-screenshots--previews)
10. [Pre-Submission Verification Checklist](#-pre-submission-verification-checklist)
11. [Transparency & Note on AI Assistance](#-transparency--note-on-ai-assistance)

---

## 🌍 Overview & Project Summary

**Green Tomorrow** is an immersive, editorial-documentary web experience dedicated to regional ecological conservation, biodiversity preservation, and clean energy innovation with a special focus on the **Western Ghats of Kerala** — one of the world's eight "hottest hotspots" of biological diversity.

Rather than presenting passive text, the platform engages students, researchers, and citizens through **real-time 3D WebGL specimens**, **interactive geospatial mapping**, **kinetic clean-energy orbital galleries**, and **grassroots conservation networks**. It bridges local field action with global ecological stewardship.

---

## 🌿 The Sustainability Problem & Theme Alignment

The **Western Ghats**, older than the Himalayas, is recognized by UNESCO and the International Union for Conservation of Nature (IUCN) as one of the planet's irreplaceable biological cradles. Traversing Kerala's eastern spine, these mist-shrouded forested ridges capture the Arabian Sea monsoon, giving birth to **44 perennial rivers** that sustain over 40 million people and countless endemic wildlife species.

### Critical Environmental Challenges
1. **Linear Habitat Fragmentation:** Infrastructure corridors, steep hillside roads, and transmission lines sever ancient elephant migration paths and arboreal highways.
2. **Shola & Wetland Encroachment:** Invasive monoculture plantations and unscientific land filling destroy high-altitude sponge basins that regulate river flows.
3. **Watershed & Stream Degradation:** Agricultural runoff, plastic waste, and chemical effluents disrupt pristine freshwater ecosystems, threatening endemic amphibians and living fossils like the Purple Frog (*Nasikabatrachus sahyadrensis*).
4. **Human–Wildlife Fringe Conflict:** Habitat shrinkage forces megafauna into forest-fringe farmlands, demanding compassionate bio-fencing and protected corridors.

### How Green Tomorrow Solves This
| Thematic Pillar | Implementation in Green Tomorrow |
| :--- | :--- |
| **Biodiversity & Local Nature** | Highlighting endemic flora and fauna of the Western Ghats (Malabar Giant Squirrel, Malabar Grey Hornbill, Purple Frog, Nilgiri Langur, Malabar Gliding Frog, Neelakurinji) via an interactive GSAP-powered **Accordion Gallery** with verified IUCN conservation statuses. |
| **Spatial Habitat Cartography** | Interactive **Leaflet GIS Map** visualizing protected reserves (Kadalundi Estuary, Sarovaram Wetland, Kakkayam Reserve, Janakikkadu Forest), fragile mangrove buffer corridors, and priority rewilding sectors across Kerala. |
| **Clean Energy & Decarbonisation** | Interactive 3D Offshore Wind Turbine specimen with dynamic PBR lighting and an 8-stage bounded **Orbital Wheel** detailing modern renewable microgrids, tidal rotors, and agrivoltaics. |
| **Grassroots Empowerment** | **Green Citizen Wall** celebrating real-world community stewardship by students, research clubs, and local protectors across Kerala. |
| **Global Equilibrium** | Interactive 3D Earth specimen embedded within the "Protect Our WORLD" typographical finale, connecting local conservation with planetary resilience. |

---

## ✨ Features & Interactive Architecture

The platform is structured into a continuous, cinematic vertical documentary journey across 6 core narrative chapters:

```
[ Hero: 3D Living Tree Specimen ] 
       ↓
[ Ch. 01: The Beginning ] ── Deep ecological origin and monsoon mechanics of the Western Ghats
       ↓
[ Ch. 02: Endemic Species Gallery ] ── Interactive 3D expanding accordion with scientific dossier modals
       ↓
[ Ch. 03: Spatial Habitat Cartography ] ── Interactive Leaflet GIS map with sanctuary telemetry
       ↓
[ Ch. 04: Environmental Challenges ] ── Highlighting fragmentation, wetland encroachment, and fringe conflict
       ↓
[ Ch. 05: Conservation Action & Clean Energy ] ── Floating 3D wind turbine + bounded orbital wheel + Green Citizen Wall
       ↓
[ Ch. 06: Global Future & 3D Earth ] ── Interactive Earth typography climax & call to action
       ↓
[ Footer: Minimal Botanical Footer ] ── Navigation, verified citations, and Kerala GPS coordinates
```

### Key Architectural Highlights
- **Hero 3D Specimen:** Photorealistic 3D Shola forest tree rendered with Three.js, directional sunlight shadows, soft camera orbit damping, camera perspective presets (*Canopy Top*, *Bark Detail*, *Reset Center*), and progressive loading indicator.
- **Endemic Species Gallery:** GSAP-driven responsive accordion with 3D panel tilt, parallax image drift, IUCN Red List status badges, and deep-dive scientific modal dialogs.
- **Interactive GIS Map:** Leaflet.js cartography with custom SVG botanical pins, sanctuary boundary telemetry, and fly-to coordinate transitions.
- **Ecological Challenges Grid:** High-definition photography and spotlight cards detailing linear infrastructure dissection, Shola monoculture encroachment, and fringe conflict.
- **Clean Energy Orbital Wheel:** Non-infinite bounded scroll wheel presenting 8 decarbonisation solutions paired with an animated 3D offshore wind turbine on a floating bio-island.
- **Green Citizen Wall:** Grassroots community showcase celebrating conservation contributions from students, researchers, and indigenous stewards across Kerala.
- **Global Typography Stage:** Interactive 3D Earth specimen seamlessly integrated into the typographic wordmark `W[O]RLD` with drag-to-inspect rotation.
- **Modern Botanical Footer:** Clean, zero-emoji, high-contrast dark botanical footer (`#061811`) with internal navigation, conservation links, verified data citations, and coordinates (`11.2588° N, 75.7804° E`).

---

## 🛠 Technology Stack & FOSS Library Credits

In strict alignment with the **FOSS Club** philosophy, the project is constructed entirely from open-source web standards without proprietary frameworks, commercial SaaS dependencies, or hidden paywalls:

- **Core Frontend:** Plain Semantic **HTML5**, **Modern CSS3** (CSS Grid, Flexbox, CSS Variables, `clamp()`, backdrop filters), and native **ES6 JavaScript Modules**.
- **Zero Build Tools Required:** Runs natively in any modern browser without requiring `npm install`, Node.js runtimes, Vite, or Webpack.
- **3D Graphics Engine:** [Three.js](https://threejs.org/) (r164) — MIT License. Powering photorealistic PBR rendering, glTF binary decompression, and orbital camera controls.
- **Geospatial Mapping:** [Leaflet.js](https://leafletjs.com/) (v1.9.4) with [OpenStreetMap](https://www.openstreetmap.org/copyright) tiles — BSD-2-Clause License & ODbL.
- **Kinetic Animations:** [GSAP (GreenSock)](https://gsap.com/) — Standard License for smooth accordion expansion and fluid layout transitions.
- **Typography:** Open-source Google Fonts:
  - *Playfair Display* (OFL License by Claus Eggers Sørensen)
  - *Space Grotesk* (OFL License by Florian Karsten)
  - *Plus Jakarta Sans* (OFL License by Tokotype)
  - *Inter* (OFL License by Rasmus Andersson)

---

## 📚 Verified Scientific Data Sources & Citations

In adherence to Hard Rule 2 (*No false or made-up facts*), every metric, scientific name, and benchmark is cited from verified public authorities:

1. **[IUCN Red List of Threatened Species](https://www.iucnredlist.org/)**: Conservation status assessments for:
   - *Ratufa indica* (Malabar Giant Squirrel) — Least Concern
   - *Ocyceros griseus* (Malabar Grey Hornbill) — Vulnerable
   - *Nasikabatrachus sahyadrensis* (Purple Frog) — Endangered
   - *Semnopithecus johnii* (Nilgiri Langur) — Vulnerable
   - *Rhacophorus malabaricus* (Malabar Gliding Frog) — Least Concern
2. **[Kerala State Pollution Control Board (KSPCB)](https://keralapcb.nic.in/)**: Environmental river water quality monitoring guidelines and baseline biochemical indicators for Kerala river basins.
3. **[Botanical Survey of India (BSI)](https://bsi.gov.in/)**: Western Ghats plant endemism records, Shola flora catalogs, and *Strobilanthes kunthiana* (Neelakurinji) 12-year flowering cycle documentation.
4. **[Zoological Survey of India (ZSI)](https://zsi.gov.in/)**: Amphibian, avian, and mammalian inventories of the Western Ghats biodiversity hotspot.
5. **[IPBES Global Assessment Report on Biodiversity](https://ipbes.net/global-assessment)**: Global ecological tipping points, habitat connectivity research, and ecosystem service valuation models.
6. **[UNESCO World Heritage Centre](https://whc.unesco.org/en/list/1342/)**: Serial site inscription data for the 39 protected natural reserves forming the Western Ghats World Heritage cluster.

---

## 📁 Repository Structure

```
terracode/
├── index.html                       # Primary single-page application entry point
├── README.md                        # Project documentation, data sources, and competition brief
├── LICENSE                          # MIT Open Source License
├── vercel.json                      # Vercel static routing & cache headers
├── .gitignore                       # Standard OS and editor exclusions
├── assets/
│   ├── images/
│   │   ├── western-ghats.jpg        # High-resolution Western Ghats landscape
│   │   ├── challenges/              # High-definition environmental challenge imagery
│   │   │   ├── linear-habitat-fragmentation.jpg
│   │   │   ├── shola-wetland-encroachment.jpg
│   │   │   ├── watershed-stream-degradation.jpg
│   │   │   └── human-wildlife-conflict.jpg
│   │   └── species/                 # Endemic flora & fauna photographic assets
│   │       ├── malabar-giant-squirrel.jpg
│   │       ├── malabar-gliding-frog.jpg
│   │       ├── malabar-grey-hornbill.jpg
│   │       ├── neelakurinji.jpg
│   │       ├── nilgiri-langur.jpg
│   │       └── purple-frog.jpg
│   ├── models/
│   │   ├── tree.glb                 # 3D Shola forest specimen (Three.js)
│   │   └── wind-turbine.glb         # 3D offshore wind turbine specimen
│   └── textures/
│       └── earth-texture.jpg        # Spherical planetary Earth texture
├── css/
│   ├── accordion-gallery.css        # Interactive species expanding accordion styling
│   ├── orbital-image-wheel.css      # Decentralized clean energy orbital wheel styling
│   └── spotlight-card.css           # Mouse-tracking spotlight card styling
└── js/
    ├── accordion-gallery.js         # GSAP accordion logic, tilt, and parallax drift
    ├── orbital-image-wheel.js       # Discrete wheel scroll & 3D tangent transformation
    └── spotlight-card.js            # Kinetic spotlight glow & grain shader module
```

---

## 🚀 Local Setup & Run Instructions

The repository is built as a zero-dependency static site. Because it uses native ES6 modules and WebGL `.glb` models, it should be served via any local HTTP server rather than `file://`:

### Option 1: Python (Built into macOS, Linux, and Windows)
```bash
# 1. Clone the repository
git clone https://github.com/thisiskishanr-cloud/terracode.git

# 2. Enter the project directory
cd terracode

# 3. Start a local server
python3 -m http.server 8080
```
Open **[http://localhost:8080](http://localhost:8080)** in your web browser.

### Option 2: Node.js / npx
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

### Deploying to Vercel / GitHub Pages
- **Vercel:** Connect the GitHub repository directly to Vercel; zero build commands or output directories are needed (`vercel.json` is preconfigured).
- **GitHub Pages:** Go to **Settings > Pages > Branch: main / root** and click Save.

---

## 👥 Team Members

| Name | Role | Institution / Department |
| :--- | :--- | :--- |
| **[Kishan R / Participant Name]** | Lead Designer & Fullstack Developer | Department of CSE, MEA Engineering College |
| *[Team Member 2 - Optional]* | *[Role]* | *[Department / Institution]* |

---

## 📸 Screenshots & Previews

| Chapter / Feature | Viewport Preview |
| :--- | :--- |
| **01. Cinematic Loading Screen & 3D Shola Specimen** | *Interactive 3D tree specimen with real-time PBR lighting, orbit controls, and typewriter narrative.* |
| **02. Endemic Species 3D Accordion Gallery** | *GSAP-powered expanding accordion showcasing Kerala's biodiversity with verified IUCN statuses.* |
| **03. Spatial Habitat Cartography** | *Interactive Leaflet GIS map visualizing fragile ecological reserves and river corridors.* |
| **04. Ecological Challenges Grid** | *Spotlight cards exploring habitat fragmentation, wetland encroachment, and fringe conflict.* |
| **05. Clean Energy Orbital Wheel & 3D Turbine** | *Bounded 8-solution clean energy kinetic wheel paired with floating 3D offshore wind turbine.* |
| **06. Global Equilibrium "Protect Our WORLD"** | *Interactive 3D Earth specimen integrated into typography.* |

---

## ✅ Pre-Submission Verification Checklist

- [x] **Theme Fit**: Fully addresses *Green Tomorrow – Building a Sustainable Future* (Clean Energy, Biodiversity, Open Data, Conservation).
- [x] **Repository Public**: Ready to be shared on GitHub for judges.
- [x] **Clean Architecture**: All unused assets, test files, and duplicate models purged.
- [x] **Meaningful Filenames**: Assets and scripts organized into `assets/`, `css/`, and `js/` with semantic names.
- [x] **Zero Build Steps**: Runs immediately in any modern browser without npm dependencies.
- [x] **Interactive & Functional**: All 3D canvases, Leaflet maps, accordion panels, and orbital wheels tested and operating smoothly.
- [x] **Responsive**: Mobile-first design tested across mobile (360px+), tablet (768px), and desktop (1280px+).
- [x] **Accurate Sourcing**: All scientific metrics, IUCN statuses, and water indicators cited from verified authorities.
- [x] **Open Source License**: MIT License included.

---

## 🤖 Transparency & Note on AI Assistance

In full transparency as permitted by the competition guidelines:
- **AI Tools Used:** Google Antigravity / Gemini was utilized as a development, coding, and code-refactoring assistant during project creation.
- **Human Oversight:** All architectural design decisions, environmental themes, regional Kerala context selection, species mapping, factual verification against official Indian portals (BSI, ZSI, KSPCB), and final creative alignments were directed by the human author.

---

*Submitted for **TERRACODE 2026** — FOSS Club, Department of Computer Science & Engineering, MEA Engineering College.*
