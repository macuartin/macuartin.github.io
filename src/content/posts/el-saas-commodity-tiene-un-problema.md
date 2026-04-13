---
title: "El SaaS commodity tiene un problema"
description: "En febrero de 2026, $2 billones desaparecieron del sector SaaS. No porque la AI reemplazara estos productos directamente, sino porque cambió algo más fundamental: la ecuación entre construir y comprar."
date: 2026-04-13
tags: ["ai", "infraestructura", "herramientas", "saas"]
---

En febrero de 2026, $2 billones desaparecieron del sector software en pocas semanas. Salesforce cayó un 27%, HubSpot un 45%, Atlassian un 35%. No fue pánico irracional. Fue el mercado procesando que algo fundamental había cambiado.

## La señal del mercado

El detonante fue Alex Karp, CEO de Palantir, declarando públicamente que la AI hace irrelevantes a muchas SaaS companies. La declaración coincidió con un sell-off masivo. En abril de 2026, un segundo golpe: Anthropic lanzó Cowork con plugins nativos para finanzas, ingeniería y diseño, y los mercados volvieron a ajustar.

Lo que el mercado está procesando no es que la AI va a reemplazar Salesforce. Es que el software que antes requería meses de desarrollo y un equipo de ingeniería ahora requiere días y un desarrollador con las herramientas correctas. La barrera de entrada al build ya no existe como existía.

## El problema que el SaaS creó

El SaaS resolvió el problema de acceso. En los años 2000 y 2010, cualquier empresa podía tener un CRM, un helpdesk o una plataforma de analytics sin necesitar un equipo de ingeniería propio. Eso fue genuinamente valioso.

Pero al hacerlo introdujo un problema nuevo: entropía operativa. Las empresas gestionan hoy en promedio 897 aplicaciones, con solo el 29% integradas entre sí. Los equipos de IT dedican el 39% de su tiempo a construir y mantener integraciones entre herramientas. Cada nueva herramienta viene con su propio modelo de datos, sus propios permisos, su propia forma de reportar. El resultado es que los equipos adaptan sus procesos al software en lugar de al revés.

Amazon, Google y Spotify construyeron la mayor parte de su tooling interno desde el principio. No fue una decisión ideológica. Fue operacional: el software genérico no encajaba en la forma en que sus negocios funcionaban, y el coste de esa fricción era mayor que el coste de construirlo. Un banco que gestiona su pipeline de crédito en Salesforce termina con workarounds en Salesforce, no con un pipeline mejor. Una cadena de retail que usa Zendesk para gestionar incidencias logísticas termina pagando por features que no usa y sin las features que necesita.

El retorno de invertir en un CRM a medida es de 8.71 dólares por dólar invertido según análisis de mercado recientes. Pero el argumento real no es financiero: es que el software propio puede reflejar exactamente cómo funciona el negocio.

## Los datos que no mienten

Según el informe de Retool de 2026, el 35% de las empresas ya reemplazaron al menos una herramienta SaaS con software propio. El 78% espera construir más software internamente durante este año. El 60% ya ha construido herramientas fuera del control de los equipos de IT en los últimos doce meses.

No es una predicción. Es un inventario del presente.

El SaaS que está en riesgo no es el software complejo: los sistemas de facturación de una aseguradora, los ERP de manufactura, las plataformas de trading de un banco. Ese software tiene décadas de desarrollo encima y complejidad de dominio real. Lo que está en riesgo es el SaaS commodity: el ticketing básico, el analytics genérico, el project management de propósito general, el helpdesk estándar. Herramientas que resolvían el problema de acceso cuando construir era caro. Herramientas que ahora son reemplazables en días.

## El desarrollador como nueva unidad de ejecución

Peter Steinberger construyó OpenClaw un viernes por la noche en noviembre de 2025. Una hora de trabajo. La herramienta acumuló 263.000 stars en GitHub. En enero de 2026, el proyecto sumó 6.600 commits generados casi en su totalidad por agentes de AI. En febrero, Sam Altman lo contrató.

Medvi Healthcare: un fundador más un contratado, que resultó ser su hermano. 401 millones de dólares de ingresos en el primer año.

Base44: vendida a Wix por 80 millones de dólares, 250.000 usuarios en seis meses. Un solo desarrollador.

Estos son los casos extremos. Pero el patrón que los hace posibles ya no es excepcional. Claude Code es la herramienta más valorada según el 46% de los 15.000 desarrolladores encuestados por The Pragmatic Engineer en febrero de 2026. OpenHands resuelve el 72% de los problemas del benchmark SWE-Bench usando Claude Sonnet. El 74% de los desarrolladores usan herramientas de AI coding de forma regular.

Lo que cambió no es que aparecieron genios. Lo que cambió es que el umbral de lo que puede ejecutar un desarrollador individual se desplazó sustancialmente. Y eso cambia el cálculo de build vs buy para cualquier empresa con al menos un ingeniero en el equipo.

## El ecosistema que lo habilita

La combinación de agentes de desarrollo y OSS maduro es lo que cierra el argumento.

Plane reemplaza Jira, Linear o Monday con más de 40.000 stars. AppFlowy reemplaza Notion con más de 66.000. Chatwoot reemplaza Intercom o Zendesk. SigNoz reemplaza Datadog o New Relic. PostHog reemplaza Mixpanel o Amplitude. Coolify reemplaza Heroku o Railway con más de 52.000 stars. n8n reemplaza Zapier o Make con más de 150.000.

No son proyectos experimentales. Tienen empresas detrás, comunidades activas, y años de desarrollo. Un desarrollador con agentes puede desplegar, configurar y personalizar cualquiera de estas herramientas en horas, no semanas. El software resultante refleja los procesos reales del negocio, no los procesos que la herramienta genérica impone.

## Lo que cambia y lo que no

El SaaS complejo no está en riesgo. La plataforma de gestión de riesgos de un banco, el sistema de control de inventario de una empresa de distribución industrial, la infraestructura de pagos de una fintech: ese software tiene complejidad de dominio real y seguirá siendo territorio de proveedores especializados.

Lo que está en riesgo es el SaaS commodity: el que cobra por conveniencia de acceso, no por complejidad real. El software que era caro de construir cuando no existían los agentes, pero que ahora es replicable en un fin de semana con las herramientas correctas.

La pregunta que cada equipo técnico va a hacerse en los próximos doce meses no es filosófica. Es práctica: ¿cuánto de lo que pagamos como commodity podemos ahora construir, controlar y adaptar nosotros mismos? Para muchos equipos, la respuesta ya está cambiando.
