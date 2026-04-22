---
title: "La AI acelera el código, no la entrega"
description: "El 90% de los equipos usa herramientas de AI coding. El 75% de los desarrolladores dice que trabaja más rápido. Las empresas no reportan mejoras medibles en delivery. No es un problema de la AI, es un problema de cuello de botella."
date: 2026-04-19
tags: ["ai", "engineering-management", "productividad", "dora"]
draft: true
---

El 16 de abril de 2026, más de 400 líderes senior de ingeniería se reunieron en San Francisco en el DX Annual. El dato que dominó las conversaciones fue uno que el mercado todavía no ha terminado de procesar: el 90% de los equipos de ingeniería usa herramientas de AI coding de forma regular, el 67% espera ganancias de velocidad del 25% o más, y el 75% de los desarrolladores reporta sentirse más productivo. Pero las empresas no están viendo mejoras equivalentes en delivery ni en resultados de negocio.

No es un problema de la AI. Es un problema de dónde está el cuello de botella.

## El dato que no cuadra

Un reporte reciente de Atlassian, junto con datos de Faros AI, muestra el patrón con claridad. En equipos con alta adopción de AI coding:

- Los desarrolladores completan un 21% más de tareas
- Los PRs mergeados aumentaron un 98%
- El tiempo de review de PRs aumentó un 91%
- El tamaño medio de los PRs creció un 154%

La lectura honesta es incómoda: la AI aceleró la creación de código, pero no cambió la capacidad humana de revisar, entender y aprobar ese código. Cuando escribir es diez veces más rápido pero revisar sigue al mismo ritmo, el nuevo cuello de botella es obvio. Lo que antes era una cola de trabajo distribuida entre creación y revisión se colapsó en un solo punto: el review humano.

## Amdahl's Law aplicada a ingeniería

Hay un principio clásico en computación llamado Ley de Amdahl. La aceleración total de un sistema está limitada por la fracción que no puedes paralelizar. En términos de un pipeline de delivery, si optimizas una parte del proceso pero el resto no escala, el throughput total solo mejora marginalmente.

La creación de código era el 30% del tiempo real del pipeline en la mayoría de equipos. El 70% restante es revisión, testing, approvals, coordinación entre equipos, ventanas de deploy, rollback plans. Si la AI hace que el 30% cueste la mitad, el pipeline completo solo se acelera un 15%. Si además los PRs son más grandes y por tanto más caros de revisar, la ganancia real puede ser negativa.

Esto no es teórico. Es lo que está pasando en equipos concretos hoy.

## Qué se está midiendo mal

El problema con la percepción de productividad es que estamos midiendo al desarrollador individual y no al equipo. Un desarrollador que cierra tres tareas al día en lugar de una se siente más productivo, y lo es en el sentido estrecho. Pero si esas tres tareas generan tres PRs que nadie puede revisar en plazo razonable, el equipo no entrega más valor al negocio. Entrega más trabajo bloqueado.

En banca, un equipo de riesgo que genera el triple de código bajo regulación no entrega el triple de features. Entrega el triple de material para el equipo de compliance que no ha crecido. En salud, un equipo de producto que cierra tickets más rápido genera una cola proporcional de cambios que pasan por revisión clínica. En retail, el velocity aparente se colapsa cuando llega el change freeze de Black Friday.

Las métricas de velocity individual son señales útiles para el desarrollador. No son métricas de negocio.

## El framework SPACE vuelve a tener sentido

Hace unos años, Nicole Forsgren y otros publicaron el framework SPACE: Satisfaction, Performance, Activity, Communication, Efficiency. La idea era que la productividad en ingeniería no se mide con una sola métrica sino con un conjunto equilibrado. El framework tuvo tracción pero en muchas orgs se diluyó en favor de métricas más simples como lines of code, PRs mergeados o story points completados.

En el DX Annual de 2026, SPACE volvió a estar en el centro de las conversaciones. La razón es directa: cuando la AI distorsiona las métricas de activity (PRs, commits, tareas cerradas) hacia arriba sin mover las de performance (delivery real, outcomes de negocio), el desajuste entre lo que celebramos y lo que importa se vuelve visible.

Un equipo que celebra 98% más PRs pero entrega las mismas features al negocio tiene un problema de medición, no un problema de productividad.

## Qué puede hacer un engineering manager

Lo primero es no culpar al desarrollador. El dev que reporta sentirse más productivo probablemente lo es, en lo que puede controlar. El problema es sistémico y se resuelve a nivel de equipo y de pipeline.

Algunas ideas que están funcionando en equipos que lo han reconocido:

1. **Medir lead time de PR a producción, no PRs mergeados.** Si los PRs están creciendo y los reviews se ralentizan, la ganancia de creación se evapora en el cuello de botella de revisión.
2. **Diseñar el review para el nuevo ritmo.** PRs más pequeños por convención, review asíncrono como norma, herramientas de AI para pre-revisión automatizada (linting, coverage, análisis de cambios de riesgo).
3. **Revisar los gates de aprobación.** Lo que era sostenible cuando el código llegaba lento es ahora un tapón. Los change advisory boards tradicionales están particularmente expuestos.
4. **Mirar métricas de equipo, no individuales.** Deployment frequency, change failure rate, mean time to recovery. Las DORA metrics siguen siendo la referencia más útil.

## La conclusión incómoda

La AI no mejora automáticamente la capacidad de entrega de un equipo. Mejora la capacidad individual de escribir código y desplaza el cuello de botella al siguiente eslabón del proceso. Si ese siguiente eslabón es el review humano, el deploy manual o un gate de compliance diseñado para otro volumen, la ganancia de velocidad se queda en la percepción del desarrollador, no en el resultado de negocio.

El trabajo del engineering manager en 2026 no es elegir qué herramienta de AI coding adoptar. Es rediseñar el pipeline de entrega para que la aceleración del código se traduzca en aceleración de entrega. Y eso, a diferencia de adoptar una herramienta nueva, no se compra.
