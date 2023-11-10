# Nuxt 3 + FSD + UnoCSS

Template for development on Nuxt 3 in the Feature-Slised Design architecture

## Includes

✅ Nuxt 3 

✅ FSD (Feature-Sliced Design) 

✅ Uno CSS

✅ Hygen (Boilerplate generation)

✅ ESLint (Preset by @antfu) 



## Hygen commands examples 

```bash
yarn feature <name> | npm run feature <name>

yarn entity <name> | npm run entity new <name>

yarn widget <name> | npm run widget new <name>
```

## Example
```bash
yarn feature HelloWorld
```

Will generate these files
```bash
  ~ features/HelloWorld/
     api/
        index.ts
     model/
        index.ts
     ui/
        HelloWorld.vue 
        index.ts 
    index.ts
```


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

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

