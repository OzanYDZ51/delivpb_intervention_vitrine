# GlassUp Landing Page

Landing page ultra-premium pour GlassUp - La plateforme Deliveroo du vitrage automobile.

## Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations avancées
- **React Hook Form** + **Zod** - Gestion et validation des formulaires
- **Lucide React** - Icônes
- **Sonner** - Notifications toast

## Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start
```

## Déploiement sur Vercel

### Option 1 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Option 2 : Via GitHub

1. Push le projet sur GitHub
2. Connecter le repo sur [vercel.com/new](https://vercel.com/new)
3. Vercel détectera automatiquement Next.js

### Option 3 : Drag & Drop

Glisser-déposer le dossier sur [vercel.com/new](https://vercel.com/new)

## Structure du projet

```
├── app/
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout racine
│   └── page.tsx         # Page principale
├── components/
│   ├── ui/              # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Select.tsx
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Section hero
│   ├── HowItWorks.tsx   # Comment ça marche
│   ├── Features.tsx     # Avantages
│   ├── ForWho.tsx       # Pour qui
│   ├── Stats.tsx        # Statistiques
│   ├── Testimonials.tsx # Témoignages
│   ├── FAQ.tsx          # FAQ
│   ├── CTA.tsx          # Call to action
│   ├── Footer.tsx       # Footer
│   ├── SignupModal.tsx  # Modal inscription
│   └── Loader.tsx       # Loader initial
├── lib/
│   └── utils.ts         # Fonctions utilitaires
└── public/              # Assets statiques
```

## Fonctionnalités

- Design style Prime Video (sombre et premium)
- Animations fluides avec Framer Motion
- Formulaire d'inscription avec validation
- Compteurs animés
- Carousel de témoignages
- FAQ accordion
- Responsive mobile-first
- SEO optimisé
- Performance optimisée

## Customisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

- `cyan` : Couleur principale (#00B4D8)
- `navy` : Couleurs de fond (#0F171E - #1A2634)

### Contenu

Modifier le contenu directement dans les composants :
- Témoignages : `components/Testimonials.tsx`
- FAQ : `components/FAQ.tsx`
- Stats : `components/Stats.tsx`

## License

MIT
