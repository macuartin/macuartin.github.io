---
title: "La paradoja AI del platform engineer"
description: "Cada ingeniero con AI assistant genera 3x más trabajo al platform team. La empresa que celebra '5x más deploys' sin mirar el coste operacional está mintiéndose."
date: 2026-06-10
tags: ["platform-engineering", "sre", "ai", "devops", "operaciones"]
---

Hace unas semanas escuché en una reunión de leadership la frase exacta: "ahora deployamos cinco veces más rápido desde que activamos los AI assistants". Aplausos, slides verdes, kudos al CTO. Al día siguiente abrí el dashboard de incidentes del platform team. El número de alertas semanales había subido 3x en el mismo periodo. Nadie en esa reunión había mirado ese gráfico.

La desconexión no es anómala, es estructural. En 2026, el 73% de los platform teams ya integran AI assistants en al menos un workflow. El 41% del código que se commitea hoy lo escribe AI. La velocidad de los devs sube de forma medible. La métrica con la que se justifica el rollout no captura la externalidad que el platform team absorbe en silencio.

## El coste oculto del 41% de código AI

Cuando el dev medio pasa de escribir cien líneas al día a revisar trescientas generadas por AI, cambia lo que llega al pipeline. Más PRs. Más builds. Más deployments. Más artefactos en el registry. Más imágenes ephemeral en clusters. Más config drift entre entornos. El DORA report de 2024 ya documentaba que la delivery stability bajaba un 7,2% en organizaciones con alta adopción AI. El reporte de 2025 introdujo una métrica nueva, "rework rate", precisamente porque las cuatro originales no capturaban lo que estaba pasando.

El platform team absorbe ese delta sin que nadie lo vea. Cada PR adicional dispara CI runs adicionales, jobs adicionales, observabilidad adicional. El runbook que cubría cincuenta deploys semanales hace agua con doscientos. Las alertas calibradas para un volumen estable empiezan a sonar como ruido. El SLO que se cumplía con tres rollbacks al mes empieza a colgarse con doce.

## La asimetría de medición

La trampa es de medición, no de capacidad técnica. Los devs se miden por throughput: lead time, PRs merged, story points. El platform team se mide por uptime, latencia, MTTR. Las dos métricas viven en dashboards distintos, en reuniones distintas, con sponsors distintos.

Cuando la empresa decide rollear AI assistants, mide el éxito por el primer set. La velocidad sube, las celebraciones empiezan. El coste cae en el segundo set, pero como nadie lo ata al rollout, parece un problema operativo aleatorio. "Tenéis que escalar", "necesitáis más automatización", "calibrar mejor las alertas". Nadie dice: "el rollout AI dobló la carga sin doblar la plantilla".

He visto este patrón en cuatro empresas en seis meses, en industrias muy distintas: fintech, banca regional, ecommerce SaaS, una compañía de salud. Tres de ellas cometieron exactamente el mismo error: subir el éxito del proyecto AI a presentación de board mientras el platform team negociaba en privado un aumento de plantilla que el board acababa rechazando "porque la empresa está siendo más eficiente".

## El patrón nuevo de incidentes

Hay algo más sutil que el volumen. El código AI-generated falla de forma distinta al humano. Errores subtiles en parsers, dependencias inventadas que pasan el lint pero rompen en producción, configuraciones plausibles pero incorrectas, optimizaciones aprendidas de Stack Overflow sin entender el contexto del runtime. Las alertas calibradas sobre el patrón humano (typos, off-by-ones, edge cases olvidados) no detectan el patrón AI con la misma señal.

El platform team empieza a reescribir runbooks. Las queries de observabilidad que daban señal limpia ahora dan más falsos positivos porque el código que están vigilando se comporta distinto. Y cada vez que un agente AI escribe Terraform, alguien del platform team tiene que entender qué cambió en infraestructura, porque la PR review humana no escala al ritmo de 3x.

## AI SRE tools no son magia gratis

La respuesta del mercado existe. PagerDuty AI reduce ruido de alertas. Rootly AI SRE coordina workflows automatizados de incident response. Incident.io añade triage AI-assisted nativo en Slack. Sherlocks.ai construye memoria institucional para investigación contextual. Gartner proyecta que el 70% de las enterprises tendrán agentes AI operando IT infrastructure para 2029, contra menos del 5% en 2025.

Pero estas tools no son drop-in. Requieren context engineering propio: ingerir tu runbook, tu topología, tus alertas, tu histórico de incidentes. Sin ese contexto el agente da respuestas plausibles pero genéricas. Es exactamente el argumento del [efecto plaza pública](/posts/el-efecto-plaza-publica/): el agente AI solo opera sobre lo que la empresa ya tiene escrito. Si el platform team todavía documenta sus procedimientos en la cabeza de tres seniors, la herramienta AI SRE va a tardar tanto en ser útil como tarda la empresa en escribirlos.

## Una matización honesta

Tres contraejemplos que evitan que esto sea otra queja de SRE.

Primero, hay empresas donde el coste neto sí baja. Equipos con disciplina madura (test coverage real, observability built-in, contratos de API estrictos, feature flags) absorben el delta AI mejor porque ya tenían los mecanismos. El factor común no es el stack, es la madurez previa al rollout AI.

Segundo, en equipos pequeños donde el dev y el operador son la misma persona, la asimetría no existe. El coste se siente en el mismo cuerpo. La paradoja es específica del modelo con platform team separado.

Tercero, hay verticales donde la complejidad operacional es baja por diseño: sitios estáticos, APIs CRUD simples, batch jobs predecibles. Ahí el 3x de código no se traduce en 3x de ops work porque el techo operacional es bajo. La paradoja aparece donde la infraestructura es densa: microservicios, datos en streaming, compliance regulado, multi-tenancy.

## Cómo medir el coste real

La receta operativa empieza por unir las dos métricas que viven separadas.

Medir rework rate por equipo, no solo a nivel global. El equipo con más adopción AI debería ver subir el rework si el patrón está activo. Medir alert volume per deploy: si los deploys suben 5x pero las alertas suben 8x, hay deuda escondida. Medir on-call hours por equipo y atarlo al rollout AI con timestamp. Medir MTTR descompuesto: si el time to detect baja pero el time to fix no, es porque la naturaleza del bug cambió.

Y la conversación incómoda: dimensionar el platform team en proporción al AI rollout, no al headcount total. Si la organización celebra que ahora deploya 5x más, el coste razonable es subir el platform team en proporción al delta operacional medido, no al delta de devs. Esa conversación rara vez ocurre seis meses después de presentar el ROI del AI rollout al board.

## El cierre

La empresa que en 2026 celebra "ahora deployamos cinco veces más rápido" sin mirar el rework rate, el alert volume y las on-call hours de su platform team está midiendo una mitad de la ecuación. El platform engineer lo sabe y, durante un tiempo, se calla porque la presión política está del lado del éxito visible. Pero el coste existe y se va a hacer visible: como burnout, como churn de seniors, como incidente grave en pre-Black-Friday, o como un dashboard de incidentes que finalmente alguien decide proyectar en la siguiente all-hands.

La paradoja se resuelve cuando la organización aprende a mirar las dos métricas a la vez. No antes.

## Fuentes

- [DORA Insights: Balancing AI tensions](https://dora.dev/insights/balancing-ai-tensions/): paper oficial sobre delivery instability y la introducción del rework rate como nueva métrica.
- [TFiR: AI Productivity Paradox for Platform Engineering Teams](https://tfir.io/ai-productivity-paradox-platform-engineering-sre/): formulación del fenómeno con datos de campo.
- [The New Stack: In 2026, AI Is Merging With Platform Engineering](https://thenewstack.io/in-2026-ai-is-merging-with-platform-engineering-are-you-ready/): contexto industrial.
- [Platform Engineering: 10 Predictions for 2026](https://platformengineering.org/blog/10-platform-engineering-predictions-for-2026): adopción del 73% y agentes AI como first-class citizens.
- [Sherlocks.ai: Top 15 AI SRE Tools in 2026](https://www.sherlocks.ai/blog/top-ai-sre-tools-in-2026): mapa del ecosistema de AI SRE.
- [Pragmatic Engineer: AI Tooling for Software Engineers in 2026](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026): observacional desde practitioner senior.

*Nota geográfica: los datos de adopción y el mapa de herramientas son globales con sesgo USA, donde el ciclo enterprise va por delante. En España e Hispanoamérica el patrón se replica con lag de seis a doce meses pero la estructura es idéntica: el platform team absorbe la externalidad mientras la conversación de éxito sigue centrada en la velocidad de los devs.*
