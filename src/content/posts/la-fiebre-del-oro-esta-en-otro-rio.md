---
title: "La fiebre del oro está en otro río"
description: "Todos picando piedra en el mismo río (yo el primero). El oro está en otro."
date: 2026-05-04
tags: ["one-person-business", "industria", "automatizacion", "vertical-saas"]
---

Hace muchos años, antes de dedicarme a plataforma y cloud, estudié ingeniería eléctrica con mención en automatización industrial en la Universidad de Carabobo. No terminé dedicándome a ese mundo (mi carrera profesional fue por otro lado), pero lo viví desde cerca durante años, y mantengo conversaciones con amigos que sí se quedaron. Las anécdotas se repiten: PLCs Siemens y Allen-Bradley a los que hay que reprogramar a mano, SCADAs corriendo sobre Windows XP que nadie quiere tocar, HMIs de hace quince años, mantenimientos de planta gestionados con Excel y WhatsApp.

Esa proximidad indirecta me da una intuición que llevo tiempo queriendo escribir. Mientras la mayoría de la gente con la que hablo en tech está construyendo el wrapper número treinta y seis de Claude para generar contenido, hay industrias enteras donde un solo builder con criterio podría capturar millones de dólares de mercado. La metáfora que mejor lo describe es la fiebre del oro: cuando todos pican piedra en el mismo río, las pepitas grandes no están en el lecho saturado, están en los kilómetros de territorio que nadie ha mapeado. La AI saturada es el río donde todos están agachados. Las industrias tradicionales son los kilómetros de tierra sin pisar.

## La saturación que nadie quiere admitir

Los números de los mercados modernos son brutales. En 2024 se levantaron 3.800 millones de dólares solo en startups de AI agents, tres veces más que en todo 2023. La mediana de tiempo a 100 millones de dólares de funding cayó a 18 meses. TechTarget cataloga más de treinta y cinco generadores de contenido AI compitiendo por exactamente los mismos compradores. En ecommerce SaaS hay 7.640 empresas registradas, de las cuales 6.211 siguen activas.

El problema no es la demanda total, es la competencia por la atención. El coste de adquirir clientes (CAC) subió un 222% en ocho años. Los Google Ads CPCs en B2B SaaS subieron un 164% desde 2019. La mediana de CAC en B2B SaaS está en 1.200 dólares, y el New CAC Ratio en 2026 se acerca a 2: las empresas gastan 2 dólares para conseguir 1 dólar de ARR.

En este contexto, construir el SaaS número 36 de generación de contenido en 2026 no es un negocio. Es una lotería con cuota de entrada cara.

## Los ríos sin marcar

Mientras tanto, hay sectores enormes donde el software es de los noventa, los buyers están pagando licencias de medio millón de dólares y casi nadie está construyendo alternativas modernas. Los datos por vertical:

- **Manufacturing Execution Systems (MES)**: mercado de 16.230 millones de dólares en 2024, proyectado a 31.210 millones en 2034. El 55% sigue siendo on-premise. Las licencias mid-market cuestan más de 500.000 dólares. Un solo builder podría hacer una alternativa vertical específica (por ejemplo, OEE tracking para talleres con cinco a veinte máquinas) y cobrar 50 dólares al mes.
- **Precision Agriculture**: mercado de 1.500 millones en 2024, llegando a 3.870 millones en 2031. El blocker no es la demanda, es el coste. Las soluciones existentes están pensadas para granjas industriales con miles de hectáreas. El monitoreo de ganado en rebaños pequeños, el riego inteligente para parcelas individuales, el tracking de yield en cultivos especiales: son nichos sin atender.
- **SCADA para utilities pequeñas**: el mercado de Power SCADA llegará a 5.650 millones en 2034. Las cooperativas de agua, los operadores solares pequeños, las distribuidoras eléctricas regionales no tienen acceso al stack on-premise de Siemens o Schneider. Una propuesta tipo SCADA-as-a-service a 200-500 dólares al mes resuelve un dolor real.
- **Predictive Maintenance**: las plantas industriales reportan reducciones de 10-40% en costes de mantenimiento y de 70-90% en downtime no planificado cuando lo aplican. Los líderes (UpKeep, Fiix) sirven al mid-market. El SME (cinco a veinte máquinas) está prácticamente sin atender.

Cada uno de estos verticales tiene tres características en común: TAM medible (no son nichos microscópicos), software legacy de diez a veinte años, y disposición real a pagar.

## El bridge tecnológico que cambió la ecuación

Hace tres años, construir software para una planta industrial requería un equipo. Hardware custom, integración con buses Modbus o Profibus, certificaciones, ciclos de validación largos. Era el típico proyecto de seis a doce meses con cinco ingenieros.

En 2026, la ecuación cambió. Siemens Industrial Edge y AVEVA Edge corren en hardware tan barato como un Raspberry Pi industrializado. Los modelos de visión open-source detectan defectos de calidad o leen etiquetas en local, sin cloud latency. Los voice agents permiten input hands-free en planta, donde antes se necesitaban tablets robustas. Los bridges OT-IT (la conexión entre la red de planta y el cloud) ya no requieren licencias de Wonderware: hay SDKs abiertos que un solo dev puede integrar en un fin de semana.

Lo que era un proyecto de equipo es hoy un proyecto de un builder. Pero un builder con un tipo de experiencia muy específica.

## Multi-industria: el patrón se repite

El mismo razonamiento aplica a sectores que rara vez aparecen en discusiones de tech moderna:

- **Artes gráficas e imprenta**: gestión de prepress, cotizaciones automáticas, web-to-print, gestión de pedidos en imprentas SMB. La mayoría sigue trabajando con sistemas MIS de los dos mil.
- **Energía distribuida**: telemetría para pequeños operadores solares, gestión de demanda en cooperativas eléctricas, predictive maintenance para transformadores en zonas rurales.
- **Agua y saneamiento**: detección de fugas, facturación para cooperativas de agua, monitoreo de calidad en pequeñas potabilizadoras.
- **Logística no-Amazon**: TMS para flotas pequeñas, dispatch para transporte de última milla regional, cold chain para distribuidores de comida con cinco a treinta camiones.
- **Procesado de alimentos**: traceabilidad para productores SMB sujetos a FSMA o normativas locales, gestión de batches, reportes regulatorios automatizados.
- **Construcción**: gestión de equipo y maquinaria para contratistas medianos, BIM lite, tracking de seguridad sin la complejidad de Procore.

Ninguno de estos verticales sale en el feed de Twitter. Todos tienen TAM real y dolor concreto.

## Una matización honesta

Construir para industrias tradicionales no es fácil, es distinto. Los ciclos de venta son largos (de seis a dieciocho meses, frente a los treinta días del consumer SaaS). Los buyers son más reacios al cambio, especialmente cuando llevan veinte años con el mismo proveedor. Hay que entender el dominio en profundidad: lo que funciona en una imprenta de offset no funciona en una de digital, y un dueño de planta sabe distinguir a la primera al builder que no sabe de qué habla.

El que llegue creyendo que un wrapper de Claude sirve para venderle a un dueño de imprenta de sesenta años se va a llevar un golpe. La barrera no es técnica, es de relación y comprensión. Esa barrera, además, es lo que protege la oportunidad: si fuera fácil, ya estaría tomada.

## Para quién es esta oportunidad

El builder ganador en estos verticales tiene un perfil específico: doble background. Alguien que entiende un PLC y también sabe desplegar un Postgres en AWS. Alguien que ha visto un SCADA por dentro y también sabe escribir un agente con MCP. Esa intersección, en 2026, es escasa y muy valiosa.

La gente con background puro en OT (operational technology) no está construyendo software moderno. La gente con background puro en IT moderna no entiende OT. El builder híbrido, que pisó las dos casas, es el perfil que puede ganar aquí.

Yo mismo no soy ese builder híbrido. Mi carrera hoy es plataforma e ingeniería de software, no automatización. Pero conozco a varios candidatos perfectos entre antiguos compañeros de la UC y otros contactos del mundo industrial: gente que sabe lo que es debuggear un controlador a las tres de la mañana en una planta y que en los últimos años se ha cruzado con la AI. Si están leyendo esto, este post es en parte para ellos.

## El río equivocado y los que vendían picos

El AI agent número 36 es el río donde todos están picando piedra. Todos compiten por las mismas pepitas, todos pagan el mismo CAC inflacionado, todos esperan que el lecho del río les devuelva oro a la velocidad que el venture capital exige. Mientras tanto, los kilómetros de tierra sin marcar siguen ahí: imprentas con sistemas de los noventa, plantas que mantienen su producción con WhatsApp, cooperativas eléctricas con SCADA en Windows XP, ganaderos con cuadernos de papel.

Hay una segunda lectura de la fiebre del oro que conviene recordar. Los que se hicieron ricos en California en 1849 no fueron los buscadores de pepitas. Fueron los que vendieron picos, palas, vaqueros y comida a los buscadores. La capa de software vertical para industria tradicional es exactamente eso: el pico que va a usar todo el sector cuando finalmente migre, no la pepita que está escondida en su operación.

La pregunta para 2026 no es si vale la pena construir software como one-person business. Es dónde construirlo. Y la respuesta probablemente no está donde todos pican piedra.

## Fuentes

- [CB Insights: AI Agent Market Map](https://www.cbinsights.com/research/ai-agent-market-map/): datos de funding y concentración del mercado de AI agents.
- [GTM8020: CAC Benchmarks 2026](https://www.gtm8020.com/blog/customer-acquisition-cost-statistics): inflación del CAC y New CAC Ratio.
- [GlobalGrowthInsights: MES Software Market](https://www.globalgrowthinsights.com/market-reports/manufacturing-execution-system-mes-software-market-117979): tamaño y proyecciones del mercado MES.
- [Yahoo Finance: Precision Farming Software Market](https://finance.yahoo.com/news/precision-farming-software-market-expected-155050743.html): mercado de agricultura de precisión.
- [MarketsandMarkets: SCADA Market](https://www.marketsandmarkets.com/Market-Reports/scada-market-19487518.html): tamaño del mercado SCADA y oportunidades por segmento.
- [Tracxn: E-commerce SaaS Sector](https://tracxn.com/d/sectors/e-commerce-saas/__XksINljjjvemaGsPKSK_X1fbn2gIT3DbJKT5QWjj2tmA): saturación del mercado de ecommerce SaaS.
- [Qubit Capital: Vertical SaaS Sector-Specific Opportunities](https://qubit.capital/blog/rise-vertical-saas-sector-specific-opportunities): crecimiento de vertical SaaS y casos de Procore y Toast.

*Nota geográfica: los datos de mercado son globales con sesgo a USA. La oportunidad de vertical SaaS en industrias tradicionales se replica en Europa e Hispanoamérica con cifras menores pero la misma estructura.*
