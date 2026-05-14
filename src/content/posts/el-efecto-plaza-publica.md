---
title: "El efecto plaza pública"
description: "Operar en canales públicos internos es forcing function de autocrítica y propagación de soluciones. En 2026 también es prerequisito para que los agentes AI sean útiles."
date: 2026-05-14
tags: ["cultura", "transparencia", "slack", "ai", "procesos", "saas"]
---

Hace unos meses ayudé a una empresa SaaS mediana a ordenar sus procesos de desarrollo y devops. El diagnóstico inicial era genérico: ciclos largos, releases dolorosos, equipos chocando entre sí. La causa raíz me sorprendió: no era arquitectura, no era stack, no era falta de seniority. Era topología de comunicación.

Toda la operación se sostenía sobre Microsoft Teams. Cada equipo tenía su grupo privado, las preguntas se hacían por chat individual al lead, los pedidos de ayuda entre equipos iban por DMs y las decisiones quedaban en hilos de tres personas que nadie más vería jamás. Hablamos de una empresa de doscientos ingenieros donde un mismo problema (un error de despliegue, una decisión de schema, un retoque de la pipeline de CI) se había resuelto tres veces en tres equipos distintos durante el mismo trimestre, sin que ninguno supiera de la solución del otro.

El cambio que propusimos no fue arquitectónico. Fue de espacio. Migramos a Slack y establecimos una regla: el soporte interno, los pedidos de ayuda y la discusión de decisiones técnicas debían ocurrir en canales públicos, en hilos. Los DMs solo para personal, sensitive y 1-on-1.

Lo que pasó las primeras semanas fue lo que vine a llamar el efecto plaza pública. La gente, al empezar a argumentar sus decisiones en público, se daba cuenta sola de que el proceso era ridículo y burocrático. Nadie tuvo que decírselo. Bastaba escribir el porqué de un paso, mirarlo en pantalla con cuarenta colegas leyendo, y la incoherencia saltaba.

## El primer mecanismo: la coherencia que impone la audiencia

Cuando alguien argumenta una decisión en privado, no necesita pasar el filtro de pares. El interlocutor único asiente, completa los huecos, presume buena fe. Es un entorno de baja fricción cognitiva. Por eso los procesos burocráticos sobreviven tan bien en DMs: no hay nadie pidiendo justificación pública.

Cuando esa misma decisión se escribe en un canal con cuarenta personas observando, el coste de defender una postura débil sube de golpe. El acto de teclear "lo hacemos así porque siempre lo hicimos así" frente a un grupo es físicamente incómodo. Y ese malestar es el síntoma de algo importante: el autor mismo, al verlo escrito, se da cuenta de que el argumento no se sostiene.

En la empresa SaaS vi el patrón varias veces: alguien escribía la primera línea de un proceso burocrático, se quedaba pensando, borraba, y volvía con "ok, ahora que lo escribo, ¿esto por qué lo hacemos?". La plaza pública no impuso una respuesta, forzó la pregunta. Es el viejo efecto Hawthorne con observadores laterales en vez de jerárquicos, y por eso resulta tolerable.

## El segundo mecanismo: la propagación lateral de soluciones

Los silos producen un patrón muy específico que es invisible mientras existen. El equipo A resuelve un problema concreto en marzo. El equipo B se topa con el mismo problema en junio, no encuentra antecedentes, lo resuelve otra vez desde cero. El equipo C lo hace en septiembre. Tres veces el mismo coste, ninguna acumulación de conocimiento.

Cuando la conversación está en un canal público y los hilos quedan archivados, la pregunta de B encuentra automáticamente la conversación de A. No por un sistema de documentación elegante, simplemente por búsqueda. Las soluciones dejan de ser eventos aislados y empiezan a comportarse como activos.

Slack publica como guía propia un umbral del 70% de comunicación en canales públicos para que ese efecto se materialice. Por debajo, la búsqueda devuelve fragmentos sin contexto. Y a medida que una empresa crece, el porcentaje de DMs sube y el de canales públicos baja: esa curva es exactamente la curva de los silos.

## Casos de industria: el patrón está documentado

GitLab es el ejemplo más extremo. Su handbook tiene más de diez mil páginas, está publicado en internet, cualquier persona del mundo puede leerlo. El principio operativo declarado es "everything we do is public by default": organigramas, primeros borradores, datos self-serve, decisiones, todo abierto. El default no es Slack ni meeting, es documentar en el handbook o en issues públicos antes que mandar un mensaje privado.

Stripe practica algo parecido con su cultura de email-as-default-to-public-lists: las decisiones se discuten en listas amplias en lugar de hilos privados. Basecamp ancla cada idea a un pitch escrito en formato Shape Up, donde el documento público es la unidad de decisión, no la conversación. Tres empresas distintas, tres herramientas distintas, mismo principio: la operación que importa ocurre donde alguien más puede leerla.

## Conway, aplicado dos veces

Melvin Conway en 1968: "cualquier organización que diseña un sistema produce un diseño cuya estructura es una copia de la estructura de comunicación de la organización". Es la ley de Conway, y lleva cincuenta y ocho años explicando por qué los equipos que no se hablan producen sistemas que tampoco se hablan.

La lectura clásica encaja directamente con la plaza pública. La empresa SaaS del inicio del post tenía tres soluciones distintas al mismo problema porque tenía tres conversaciones paralelas que nunca se cruzaron. La arquitectura técnica replicaba, con una fidelidad casi cómica, la topología de los DMs. Cambiar de Teams privado a Slack público no es solo una decisión cultural, es una intervención Conway: se modifica la estructura de comunicación para modificar la estructura del software que esa empresa va a seguir produciendo.

La segunda aplicación es nueva. En 2026 hay una capa adicional sobre la que Conway opera: el knowledge graph del agente AI. El agente hereda la estructura de la comunicación que ingiere. Si la información vive en silos privados, el agente opera con silos. Si vive en plaza pública, el agente puede cruzar dominios sin pedir permiso a nadie. Lo que Conway describía como inevitable en el software ahora ocurre también en la representación interna que el agente tiene de la empresa.

Dos aplicaciones, misma ley. La estructura de comunicación esculpe, sin que nadie se dé cuenta, tanto el software que la empresa produce como el cerebro AI con el que ese software va a empezar a operar.

## El giro de 2026: la plaza pública es el sustrato del agente

Anthropic define context engineering como la evolución natural del prompt engineering. El bottleneck para que un agente sea útil en una empresa ya no es el modelo, es el contexto al que puede acceder. Plataformas como Dust, Zep o Cassidy AI existen para ingerir Slack, Notion, Drive y GitHub y volverlos contexto consultable.

La consecuencia es directa: las conversaciones que ocurren en DMs y grupos privados de Teams **no existen** para un agente. No están en el knowledge graph, no alimentan el RAG, no aparecen en una búsqueda semántica. La empresa que decide su producto en privado tiene, desde el punto de vista del agente, un cerebro corporativo vacío.

El corolario es estructural. Las empresas con plaza pública interna ya tenían ventaja humana, ahora tienen ventaja AI también: no porque sus modelos sean mejores, porque sus agentes pueden operar sobre algo. Una empresa con todo en DMs no puede construir un agente útil de soporte, onboarding ni resolución de incidencias, porque el contexto nunca se escribió en un lugar accesible.

## Una matización honesta

El primer riesgo es el que documentó Ethan Bernstein en *The Transparency Trap* (HBR, 2014). En su estudio experimental, los trabajadores que se sentían observados **reducían** la experimentación. Escondían comportamientos no normados, dejaban de probar enfoques no rehearsed. La transparencia mal calibrada produce performance theater, no aprendizaje.

El segundo riesgo es el que Amy Edmondson lleva veinticinco años mostrando: la transparencia funciona si existe psychological safety previa. Si la plaza pública se usa para señalar errores y castigar, la gente deja de escribir en público lo que importa. Vuelven los DMs, ahora con una capa adicional de paranoia.

El tercer riesgo combina dos efectos que McKinsey agrupa en *The Dark Side of Transparency*: information overload (cuestionamiento perpetuo de decisiones ya tomadas, ejecución más lenta) y transparency theater (canales públicos vacíos donde no se decide nada mientras la operación real sigue en grupos cerrados). Lo segundo es peor que no tener plaza pública, porque produce la ilusión de que el problema está resuelto.

## Cómo construir plaza pública útil

Default a canal público para cualquier pregunta de trabajo, DMs reservados a personal y 1-on-1. Threads obligatorios para que el canal no sea un firehose. Decisiones de peso ancladas a un documento escrito (ADR, RFC, página de handbook), donde el canal es discusión y el documento es resolución.

Producir psychological safety antes de pedir apertura. Edmondson tiene tres palancas: stage setting (declarar que el error es información, no falta), proactive inviting (preguntar activamente a los que no hablan) y productive responding (responder al error sin castigo). Sin estas tres, la plaza queda vacía.

Canales de tamaño humano. Cinco mil personas en un canal es ruido, no plaza. Mejor varios temáticos de 30 a 200. Y el ejemplo lo da el director general: si el CEO gestiona todo por DM, el resto sigue.

## El cierre

La plaza pública interna no es un *culture hack* ni un truco de empresas remote. Es una decisión arquitectónica con consecuencias compuestas: menos silos, más autocrítica espontánea, memoria buscable, y ahora un prerequisito para que los agentes AI sean útiles dentro de la empresa.

La empresa que en 2026 sigue gestionando su operación en DMs no solo tiene un problema cultural. Tiene un problema de infraestructura para todo lo que viene. No porque los agentes vayan a reemplazar la conversación humana, sino porque van a multiplicar el valor de lo que ya está en público, y a ignorar todo lo que sigue escondido.

## Fuentes

- [GitLab Handbook: Transparency by Default](https://handbook.gitlab.com/handbook/security/transparency-by-default/): el principio operativo "public by default" documentado.
- [GitLab Handbook: Slack](https://handbook.gitlab.com/handbook/tools-and-tips/slack/): cómo se usa Slack en una empresa con cultura de handbook-first.
- [Slack: What to post where](https://slack.com/blog/collaboration/what-to-post-where-in-slack): guía oficial con el umbral del 70% de comunicación en canales públicos.
- [Amy C. Edmondson: Psychological Safety](https://amycedmondson.com/psychological-safety/): marco conceptual y framework de las tres palancas.
- [Edmondson 1999: Psychological Safety and Learning Behavior in Work Teams](https://journals.sagepub.com/doi/10.2307/2666999): paper académico original.
- [HBR: The Transparency Trap (Bernstein, 2014)](https://hbr.org/2014/10/the-transparency-trap): estudio experimental sobre reducción de experimentación bajo observación.
- [McKinsey: The Dark Side of Transparency](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-dark-side-of-transparency): contraindicaciones de la transparencia mal calibrada.
- [Anthropic: Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents): contexto como nuevo cuello de botella de los agentes.
- [Melvin Conway: How Do Committees Invent? (Datamation, 1968)](https://www.melconway.com/Home/Committees_Paper.html): paper original de la ley de Conway.
- [Fast Company: What your private Slack channels say about your company's culture](https://www.fastcompany.com/90424314/what-your-private-slack-channels-say-about-your-companys-culture): correlación entre crecimiento de DMs y aparición de silos.

*Nota geográfica: los casos documentados (GitLab, Stripe, Basecamp) y la literatura académica (Edmondson, Bernstein, McKinsey) son USA-céntricos. El patrón Teams + silos + DMs aplica con la misma estructura en empresas SaaS de España e Hispanoamérica, donde además la herencia de Microsoft 365 en el segmento corporativo lo hace más prevalente.*
