// uno.config.ts
import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...UnoCSS options
  transformers: [transformerVariantGroup(), transformerDirectives()],

})
