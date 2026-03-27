# macuartin.com

Blog personal construido con [Astro](https://astro.build/) y desplegado en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

## Crear contenido

- **Posts** (artículos largos): crear `.md` en `src/content/posts/`
- **Notas** (ideas breves): crear `.md` en `src/content/notes/`

Cada archivo necesita frontmatter:

```yaml
---
title: "Título del post"
description: "Descripción breve"
date: 2026-03-27
tags: ["tag1", "tag2"]
draft: false
---
```

## Deploy

El deploy es automático — cada push a `main` dispara el workflow de GitHub Actions que construye y despliega a GitHub Pages.
