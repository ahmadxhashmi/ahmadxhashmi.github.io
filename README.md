# Ahmad Hashmi — Software Developer Portfolio

## 🔗 Live: [ahmadxhashmi.github.io](https://ahmadxhashmi.github.io/)

A premium, single-page scrolling portfolio website built with a dark luxury aesthetic. Features custom accent colors, enriched visual elements, smooth scroll animations, and comprehensive project showcasing.

## ✨ Features

- **Dark Luxury Aesthetic** — Deep blacks with lime (#ADF33C) and burnt orange (#C85E18) accent colors
- **Enriched Visuals** — Terminal-style decorations, grid patterns, floating tech badges, code snippets, glow orbs
- **Smooth Scrolling** — Powered by Lenis for buttery-smooth page transitions
- **Interactive UI** — Custom cursor, hover effects, micro-animations throughout
- **Responsive Design** — Fully responsive across all breakpoints
- **Sections** — Hero → Selected Work → About → Process → Motivation → Services → Stats → Experience → Stack → FAQ → Contact Footer

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0A0A0A` | Primary background |
| `--accent-lime` | `#ADF33C` | Primary accent — headings, badges, buttons |
| `--accent-orange` | `#C85E18` | Secondary accent — tags, prices, roles |
| `--text` | `#FFFFFF` | Primary text |
| `--text-muted` | `#888888` | Body text |

## 🛠️ Tech Stack

- **React** + **Vite** — Fast build tooling
- **Tailwind CSS v3** — Utility-first styling
- **Framer Motion** — Production-ready animations
- **Lenis** — Smooth scrolling
- **Lucide React** — Icon system
- **Google Fonts** — Syne, DM Sans, Playfair Display

## 🚀 Getting Started

```bash
# Clone
git clone https://ahmadxhashmi.github.io
cd ahmed-portfolio

# Install
npm install

# Dev server
npm run dev

# Build & deploy
npm run build
npm run deploy
```

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `localhost:5173` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy `dist/` to GitHub Pages |

## 📂 Structure

```
src/
├── components/
│   ├── sections/    # Hero, Projects, About, Process, etc.
│   └── ui/          # Navbar, CustomCursor, Layout
├── data/
│   └── portfolio.js # All content data
├── App.jsx          # Section composition
├── main.jsx         # Entry point
└── index.css        # Design tokens & global styles
```

## 📄 License

MIT © Ahmad Hashmi
