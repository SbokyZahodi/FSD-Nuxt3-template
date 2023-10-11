---
to: entities/<%= path %>/index.ts
---

export * from './ui'
<%- model ? "export * from './model'" : null %>
<%- api ? "export * from './api'" : null %>
