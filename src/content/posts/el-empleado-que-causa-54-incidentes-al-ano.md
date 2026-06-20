---
title: "El empleado que causa 54 incidentes al año"
description: "Las empresas desplegaron agentes AI como si fueran software. Se comportan como empleados: cometen errores con autoridad y nadie les hizo onboarding ni les puso manager."
date: 2026-06-20
tags: ["ai", "agentes", "sre", "governance", "operaciones"]
---

Imagina un empleado que causa 54 incidentes al año. Nueve de ellos graves, de esos que te tienen más de cuatro horas conteniendo el daño. Un tercio de esos incidentes graves expone datos o abre una brecha de seguridad. No lo despedirías porque no sabes su nombre: nadie lo contrató, nadie le hizo onboarding, nadie le firmó un contrato. Lo desplegó el equipo de producto un martes, con un par de claves de API y permisos de escritura en producción.

Ese empleado es la media de los agentes AI de una empresa en 2026. El número, 54 incidentes al año, sale del estudio que IBM publicó el 8 de junio sobre 2.000 ejecutivos de tecnología en 33 países y 19 industrias. No es una proyección ni un titular de conferencia: es lo que los CIOs y CTOs reportan que ya les pasó el año anterior.

## Los datos que nadie quería ver

El estudio de IBM es la foto más completa hasta ahora, y conviene leerla con su etiqueta de evidencia puesta: es una encuesta a ejecutivos, autoreportada, con el sesgo natural de quien vende governance. Aun con ese descuento, la dirección es difícil de discutir.

De media, las organizaciones encuestadas vivieron 54 incidentes de agentes AI en el año, entendidos como sucesos no intencionados o dañinos que requirieron corrección humana. El 17% de ellos fueron de alta severidad, con más de cuatro horas de contención. Dentro de esos graves, el 37% terminó en exposición de datos o brecha de seguridad, el 33% provocó fallos en cascada y el 17% disparó problemas de compliance.

Lo más revelador no son los incidentes, es el reconocimiento de pérdida de control. El 66% de los CIOs y CTOs dice ser responsable de sistemas que no controla del todo. El 77% admite que la adopción de AI va más rápido que su capacidad de governance. El 70% dice que los equipos de negocio despliegan tecnología más rápido de lo que IT puede siquiera rastrear. Y solo el 11% se siente plenamente preparado para la escala de agentes que viene, justo cuando el propio estudio proyecta un 38% más de agentes desplegados para 2027.

## El error de categoría

Aquí está el problema de fondo, y no es técnico: es de categoría mental.

El software clásico falla de forma determinista. Le das la misma entrada y produce el mismo error. Se gestiona con testing, con CI, con rollbacks, con feature flags. Si rompe, revierte el deploy y el bug desaparece. El empleado humano falla de forma distinta: comete errores variables, aprende, tiene días malos, interpreta mal una instrucción ambigua. Por eso no lo gestionas con un rollback, lo gestionas con onboarding, permisos acotados, supervisión proporcional al riesgo y accountability cuando algo sale mal.

El agente AI falla como un empleado y se gestiona como si fuera software. Ese es el gap. Es probabilístico, interpreta contexto, alucina con seguridad, toma decisiones plausibles pero incorrectas, y sin embargo lo desplegamos como si fuera una librería más en el package.json. Le damos permisos amplios porque pedir permisos granulares es incómodo, lo soltamos sin un periodo de supervisión y nos enteramos de lo que hace cuando ya rompió algo.

Gartner lo formuló el 26 de mayo con una frase que parece de manual de recursos humanos: aplicar una governance uniforme a todos los agentes lleva al fracaso. Igual que no gestionas al becario y al CFO con las mismas reglas, no puedes tratar igual a un agente que resume tickets que a uno con permiso de mover dinero.

## Cuando el becario tenía las llaves de la caja

Los casos con nombre de los últimos meses ilustran cada fallo de governance por separado, y conviene citarlos con la cautela de quien no estuvo dentro de cada empresa.

Air Canada vivió en enero un episodio donde su agente autónomo de reservas, durante una disrupción meteorológica en Toronto, reubicó a más de mil pasajeros en vuelos incorrectos. Es el fallo de autonomía sin límites: un agente con permiso de actuar a escala sobre un caso para el que no estaba calibrado.

En cripto, Step Finance reportó en enero un incidente donde agentes de trading con permiso de ejecutar transferencias sin aprobación humana movieron decenas de millones de dólares en tokens tras el compromiso de dispositivos de ejecutivos. Es el fallo de permisos excesivos: el agente tenía las llaves de la caja porque pedírselas acotadas era incómodo.

El patrón se repite en banca, seguros, retail y sector público. El denominador común nunca es que el modelo fuera malo. Es que nadie definió qué podía y qué no podía hacer ese agente, ni quién respondía cuando se equivocara.

## Gestionar un agente como se gestiona a una persona

La buena noticia del estudio de IBM es que trae también la solución, y es medible. Las organizaciones que embeben el control directamente en sus sistemas AI, en lugar de gobernar a mano, tienen un 25% menos de incidentes. Y no a costa de frenar: despliegan 16 veces más agentes y reportan un 18% más de margen operativo. La disciplina no es el freno, es lo que permite acelerar sin estrellarse.

Gestionar un agente como un empleado significa cuatro cosas concretas. La primera es onboarding, que en términos de agente es context engineering: el agente necesita conocer la empresa para operar bien, y eso depende de que la empresa tenga su conocimiento escrito en un lugar accesible. Es el argumento del [efecto plaza pública](/posts/el-efecto-plaza-publica/) llevado a su conclusión operativa: el agente solo es tan bueno como el contexto que puede leer.

La segunda es permisos mínimos y revocables, RBAC real, no una clave maestra. La tercera es supervisión proporcional: human-in-the-loop para lo irreversible (mover dinero, borrar datos, contactar clientes), autonomía para lo reversible. La cuarta es accountability: cuando un agente rompe algo, merece el mismo postmortem blameless que un incidente humano, con su timeline, su causa raíz y su acción correctiva. El agente sin audit trail es el empleado sin contrato: nadie sabe qué hizo ni por qué.

## Una matización honesta

Tres matices antes de tratar esto como ley.

Primero, la evidencia es mayormente autoreportada y de actores con interés comercial. IBM vende governance, los reportes de seguridad agrupan a vendors de seguridad. La dirección es clara, las magnitudes exactas hay que tomarlas con pinzas.

Segundo, los humanos también causan incidentes y a nadie se le ocurre proponer retirarlos. La comparación justa sería incidentes por unidad de trabajo entre agente y humano, y ese dato todavía no existe. Es posible que el agente, bien gestionado, cause menos incidentes por tarea que una persona cansada a las tres de la tarde.

Tercero, parte del problema es transitorio. El tooling de sandboxing, audit y permisos granulares está madurando rápido, y mucho de lo que hoy es fricción manual será default en doce meses.

## Cómo empezar el lunes

La receta operativa cabe en cinco pasos. Hacer inventario de agentes con un dueño humano nombrado para cada uno, porque un agente sin dueño es un agente sin manager. Definir tiers de autonomía por reversibilidad del daño, no por sofisticación del agente. Asignar un presupuesto de incidentes por agente, como el error budget de SRE de toda la vida. Tratar los postmortems de agente con la misma plantilla que los de humanos. Y revisar permisos cada trimestre, porque el permiso que se concedió para una tarea puntual rara vez se revoca solo.

## El cierre

La pregunta ya no es si tus agentes van a causar incidentes. Los datos dicen que ya los causan, con una media de 54 al año. La pregunta es si tu organización los va a gestionar como lo que realmente son: empleados estadísticos, rápidos y baratos, con acceso a producción y sin sentido común. El que llegue a 2027 tratándolos como software va a descubrir, incidente a incidente, que contrató a una plantilla entera sin ponerle un solo manager.

## Fuentes

- [IBM Newsroom (8-jun-2026): New IBM Study Finds CIOs and CTOs Face Growing AI Control Gap](https://newsroom.ibm.com/2026-06-08-new-ibm-study-finds-cios-and-ctos-face-growing-ai-control-gap-as-enterprise-deployment-scales): estudio sobre 2.000 ejecutivos en 33 países, incidentes y datos de governance.
- [Gartner (26-may-2026): Applying Uniform Governance Across AI Agents Will Lead to Enterprise AI Agent Failure](https://www.gartner.com/en/newsroom/press-releases/2026-05-26-gartner-says-applying-uniform-governance-across-ai-agents-will-lead-to-enterprise-ai-agent-failure): la tesis de segmentar governance por autonomía y riesgo.
- [CIO: CIOs are being held accountable for AI they don't fully control](https://www.cio.com/article/4182288/cios-are-being-held-accountable-for-ai-they-dont-fully-control-ibm-study-finds.html): lectura del control gap.
- [Help Net Security (5-jun-2026): Most pros have seen AI hallucinations in IT operations](https://www.helpnetsecurity.com/2026/06/05/ai-hallucinations-it-operations-research/): observacional sobre hallucinations con impacto operacional.
- [VentureBeat: AI agents are quietly generating chaos engineering failures enterprises don't track yet](https://venturebeat.com/orchestration/ai-agents-are-quietly-generating-chaos-engineering-failures-enterprises-dont-track-yet): el ángulo de operaciones.

*Nota geográfica: el estudio de IBM cubre 33 países y 19 industrias, pero los casos con nombre (Air Canada, Step Finance) son de Norteamérica y el tooling de governance más maduro está en USA. En España e Hispanoamérica el patrón de despliegue sin governance es idéntico, con el agravante de menos herramientas de control disponibles y equipos de seguridad más pequeños para absorber los incidentes.*
