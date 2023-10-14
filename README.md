# Nuxt 3 + FSD + UnoCSS + FSD

Template for development on Nuxt 3 in the Feature-Slised Design architecture

## Includes

✅ Nuxt 3 

✅ FSD (Feature-Sliced Design) 

✅ Uno CSS

✅ Hygen (Boilerplate generation)

✅ ESLint (Preset by @antfu) 

#
> Before development, it is recommended to update all dependencies in the project via taze
```
npx taze major -w
```


## Hygen commands examples 

```bash
yarn feature

yarn entity

yarn widget   
```

### This just generates named folders with index.ts files and model \ api folders if you wish

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config) [![built with Codeium](https://codeium.com/badges/main)](https://codeium.com)