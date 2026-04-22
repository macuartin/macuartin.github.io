---
title: "La burocracia mata los quick wins, aunque tengas AI"
description: "El 95% de los pilotos de GenAI no entregan impacto medible. No es un problema de modelos. Es que el valor, una vez creado, no logra atravesar los procesos que la empresa diseñó cuando crear era el problema caro."
date: 2026-04-21
tags: ["ai", "engineering-management", "plataforma", "gobernanza"]
---

Hay una estadística del MIT que circuló en abril de 2026 y que debería tener más ruido del que tuvo: el 95% de los pilotos de GenAI en empresas no entregan impacto medible en el negocio. Gartner publicó algo parecido el 7 de abril: el 30% de los proyectos GenAI son abandonados después del POC, y el 60% lo son antes si la data no está lista. McKinsey añade que el 88% de las empresas usa AI en alguna función, pero solo el 39% ve impacto en EBIT.

La lectura fácil es que la AI no funciona. La lectura honesta es que la AI sí funciona, pero el valor que genera choca con una capa que las empresas no han tocado: la burocracia. Los mangos bajitos que la AI desbloquea se quedan en el árbol porque nadie los baja.

## El problema que la AI resolvió y el que no

Hasta 2024, crear software era caro. Escribir un script, automatizar un reporte, integrar dos sistemas legacy, construir una pequeña herramienta interna: todo eso costaba días o semanas de un desarrollador. El ROI de hacerlo tenía que ser alto para justificar el coste de construcción. Las empresas desarrollaron procesos de priorización, comités de producto, roadmaps trimestrales y colas de peticiones para gestionar esa escasez.

Con agentes de desarrollo, muchas de esas tareas cuestan horas. La aritmética cambió. El ROI ya no está limitado por el coste de construir, está limitado por el coste de poner en producción. Y ese coste, en muchas empresas, es el mismo de hace cinco años.

## Qué es un quick win en 2026

Un quick win en 2026 es específico: un cambio de software con ROI claro, alcance acotado, riesgo bajo y coste de construcción marginal. Ejemplos reales de diferentes industrias:

- **Banca**: un dashboard que agrega señales de fraude de tres sistemas en una pantalla para que el analista no abra tres ventanas. Seis horas de construcción, seis semanas de aprobación.
- **Seguros**: un flujo automatizado que pre-valida los documentos de una reclamación antes de que llegue al revisor humano. Un día de desarrollo, tres meses en pasar compliance.
- **Retail**: un script que detecta productos con precio mal cargado en catálogo antes de que lleguen a la web. Dos horas de construcción, pendiente de aprobación de change management desde hace un trimestre.
- **Salud**: un script que genera los resúmenes de alta automáticamente a partir de los registros clínicos. Un fin de semana de trabajo, en revisión clínica y legal hace seis meses.
- **Energía**: un alert que detecta desviaciones de consumo en una subestación antes de que disparen el protocolo manual. Tres horas de desarrollo, esperando aprobación de la mesa de cambios del SCADA.

En todos los casos el problema no es el código. Es todo lo demás.

## Anatomía del quick win bloqueado

Un cambio de software que vale seis horas de desarrollo puede pasar por: review técnico inicial, review de seguridad, review de privacidad, aprobación de change advisory board, ventana de deploy asignada, plan de rollback aprobado, comunicación a stakeholders, sign-off de negocio, validación post-deploy. Cada paso tiene una persona, un tiempo de espera y una posibilidad de rechazo por formato.

El coste unitario de cada paso no es alto. El problema es el compounding: cada paso añade latencia, cada espera suma, y los quick wins terminan compitiendo en esa cola con cambios mucho más grandes que justifican el coste del proceso. El mango bajito no justifica el coste de recolección.

Cuando el coste de recolección es mayor que el valor del mango, el mango se queda en el árbol.

## El CAB tradicional y lo que dice DORA

El programa DORA de Google Cloud lleva años midiendo qué prácticas correlacionan con performance de delivery. La conclusión sobre change advisory boards pesados es consistente: ralentizan la entrega y no hay evidencia de que reduzcan la tasa de fallos. Los equipos con CABs pesados no tienen menos incidentes, tienen menos cambios.

Esto importa porque el CAB fue diseñado para un mundo donde los cambios eran caros de producir y valía la pena gastarles cuarenta minutos de revisión humana. En un mundo donde los cambios son baratos y abundantes, el CAB es el equivalente a un peaje por kilómetro en una autopista con mil veces más tráfico. El peaje no cambió, el tráfico sí.

La evidencia práctica apunta a un modelo distinto: aprobaciones asíncronas integradas en el pipeline de CI/CD, con gates automatizados para lo que puede ser automatizado (linting, tests, análisis estático, scans de seguridad) y revisión humana solo para lo que realmente la necesita (cambios en sistemas críticos, modificaciones de contratos públicos, operaciones irreversibles).

## El PR review como nuevo gate

Hay otra dimensión que está empeorando rápidamente. Según los datos de Atlassian de 2026, en equipos con alta adopción de AI coding el tiempo de review de PRs aumentó un 91% y el tamaño medio de los PRs creció un 154%. Es decir: los desarrolladores producen más código, más rápido, y los revisores no pueden seguir el ritmo. El review humano se convirtió en el nuevo cuello de botella estructural.

El quick win que se construyó en seis horas ahora espera dos semanas en la cola de review. Luego entra al CAB. Luego espera la ventana de deploy. Cuando llega a producción, el contexto de negocio por el que se priorizó ya cambió.

## Modelos que funcionan

Hay patrones organizativos que mitigan esto, ninguno es nuevo y todos requieren disciplina sostenida.

**Single-threaded leaders**, el modelo de Amazon: un solo dueño técnico con autoridad completa sobre una iniciativa, sin necesidad de coordinar aprobaciones con pares. Reduce dramáticamente el coste de decisión.

**Squads con mandato, en el modelo original de Spotify**: equipos pequeños con capacidad de decisión técnica end-to-end, no squads como capa organizativa cosmética por encima de la misma burocracia de siempre.

**Delegación por riesgo**: no todos los cambios requieren el mismo gate. Un deploy de un script de analítica interna no debería pasar por el mismo proceso que un cambio en el motor de pagos. La segmentación de gates por criticidad real del sistema libera velocidad donde no hay riesgo.

**Automation-first governance**: cualquier control que pueda ejecutarse automáticamente debería ejecutarse automáticamente. Compliance como código, políticas como código, aprobaciones por convención en lugar de por meeting.

Un caso referenciado en los reportes recientes: KW Campaigns redujo las aprobaciones manuales en un 63% manteniendo el 100% de compliance de políticas, y multiplicó su velocity por 3.1 sin añadir headcount. El patrón es replicable, no excepcional.

## Qué debe cambiar en los próximos seis meses

La pregunta para un líder técnico en 2026 no es si adoptar AI. Es qué hacer con la ganancia de capacidad de creación que ya tiene, cuando el sistema alrededor sigue diseñado para la escasez anterior.

Las tres palancas concretas son: auditar el pipeline de delivery end-to-end y medir dónde está el tiempo real (casi nunca en el coding); segmentar el proceso de aprobación por riesgo real de los cambios; y automatizar todo control que pueda automatizarse sin comprometer la gobernanza real.

Lo que no cambia: el código complejo sigue necesitando revisión profunda, los sistemas críticos siguen necesitando controles estrictos, la gobernanza sigue siendo necesaria. Lo que sí cambia: el coste de la burocracia genérica aplicada a todo por igual se volvió prohibitivo.

Los mangos bajitos están ahí. La pregunta es si la empresa está diseñada para recogerlos.
