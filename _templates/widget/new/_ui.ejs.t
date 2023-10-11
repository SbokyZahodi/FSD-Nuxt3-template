---
to: widgets/<%= path %>/ui/index.ts
---

import <%= h.capitalize(path.split('/').at(-1)) %> from './<%= h.capitalize(path.split('/').at(-1)) %>.vue'

export { <%= h.capitalize(path.split('/').at(-1)) %> }
