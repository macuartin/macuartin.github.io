---
title: "Markdown en Astro"
description: "Referencia rápida de lo que se puede hacer con Markdown y MDX en Astro."
date: 2026-03-27
tags: ["astro", "markdown"]
---

Astro soporta Markdown y MDX nativamente. Algunas cosas útiles:

**Code blocks** con syntax highlighting automático gracias a Shiki:

```javascript
const greeting = "Hola desde el blog";
console.log(greeting);
```

**Links entre notas** funcionan como cualquier link relativo:

```markdown
[Ver mi primer post](/posts/hola-mundo/)
```

**Imágenes** se ponen en `public/` y se referencian así:

```markdown
![Descripción](/mi-imagen.png)
```

Si necesitas componentes interactivos, usas `.mdx` en lugar de `.md` y puedes importar componentes de Astro o React directamente.
