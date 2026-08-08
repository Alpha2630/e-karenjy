# Madagascar Voyage Immersif

Application web **production-ready** qui donne aux visiteurs l’impression de voyager physiquement à Madagascar.

## Stack

- React 18 + Vite + TypeScript (strict)
- Framer Motion (animations, transitions de page, scroll-triggered)
- Tailwind CSS v4 + DaisyUI (thèmes custom madagascar-light / madagascar-dark)
- Material UI (Dialog, Drawer, Chip, Tooltip…)
- React Router DOM v6 + transitions animées
- React Leaflet (carte interactive)
- Swiper.js (carrousels)
- Lenis (smooth scroll)
- Zustand (langue + thème)
- i18next (Français / English / Malagasy)
- Lucide React + React Icons
- Unsplash images haute qualité

## Installation

```bash
cd madagascar-voyage
npm install
npm run dev
```

Ouvre http://localhost:5173

## Scripts

- `npm run dev` — développement
- `npm run build` — build production
- `npm run preview` — prévisualiser le build

## Structure

```
src/
├── components/
│   ├── Hero/
│   ├── Map/
│   ├── Biodiversity/
│   ├── Culture/
│   ├── Experiences/
│   ├── Gallery/
│   ├── Practical/
│   ├── Layout/
│   └── common/
├── data/          # destinations, animals, itineraries
├── i18n/
├── pages/
├── store/         # Zustand
└── ...
```

## Fonctionnalités

- Loading screen immersif « Tongasoa eto Madagasikara »
- Hero cinématographique
- Carte Leaflet interactive avec modales
- Section biodiversité (stats + carrousel lémuriens)
- Cultures & peuples (fady, Famadihana, gastronomie…)
- Itinéraires filtrables (7/14/21 jours)
- Galerie masonry + lightbox Framer Motion
- Infos pratiques 2026 (visa, saison, monnaie…)
- Mode clair / sombre
- 3 langues (FR / EN / MG)
- Smooth scroll Lenis
- Transitions de page animées
- Mobile-first responsive

## Palette

- Vert émeraude profond `#0d5c4b`
- Terracotta `#c45c26`
- Or baobab `#d4a017`
- Bleu océan `#1e6f8a`
- Crème `#faf7f2`

## Notes

Les images viennent d’Unsplash (placeholders haute qualité).  
Pour un déploiement réel, remplacez-les par vos propres assets optimisés.

Bon voyage !
