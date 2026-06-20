---
title: "Europa descubrió que el kill switch no es suyo"
description: "El Tech Sovereignty Package de junio no es geopolítica abstracta. Para los platform teams europeos es un criterio nuevo que entra en tus decisiones de arquitectura hoy."
date: 2026-06-20
tags: ["cloud", "soberania", "europa", "regulacion", "platform-engineering"]
---

"Queremos estar seguros de que nadie tiene un kill switch." La frase es de la Comisión Europea, recogida por CNBC el 3 de junio, el día que presentó su Tech Sovereignty Package. Es una frase incómoda porque admite en voz alta lo que cualquier platform engineer europeo sabe hace años: la infraestructura crítica del continente corre sobre proveedores que, en última instancia, responden ante una jurisdicción que no es la europea.

No es un debate de Bruselas. Es una entrada nueva en el backlog de tu equipo. Y antes de tratarla como otra regulación lejana conviene entender qué se propuso exactamente, porque es más matizado, y más interesante, que el titular del kill switch.

## Qué se presentó el 3 de junio

El Tech Sovereignty Package combina dos piezas legislativas: el Cloud and AI Development Act (CADA) y una revisión del Chips Act. La parte que afecta a quien diseña sistemas es CADA, y su corazón es un marco de soberanía con cuatro niveles de "Union assurance" para evaluar servicios cloud.

Los niveles van de menos a más exigente. El Nivel 1 pide infraestructura, activos y datos en la EU, y que el proveedor controlado por un tercer país no pueda ser obligado a reportar vulnerabilidades a autoridades extranjeras. El Nivel 2 suma certificación cloud europea, medidas técnicas y legales contra el acceso de terceros países, y un software bill of materials completo con auditoría del código de componentes foráneos. El Nivel 3 exige propiedad y control europeos, con derogaciones posibles si el tercer país tiene adecuación GDPR. El Nivel 4, el más estricto, pide propiedad europea sin derogaciones y control efectivo sobre todos los componentes de software, sin que ningún tercer país influya en su diseño o evolución.

El marco aplica a cloud que sostiene sectores sensibles: energía, sanidad, transporte, agua, seguridad nacional, gestión de fronteras, law enforcement y defensa. Conviene marcar el nivel de evidencia: esto es una propuesta de regulación, no ley aún. Tiene que pasar por la negociación entre el Consejo y el Parlamento, y la Comisión ya retrasó este paquete una vez.

## El conflicto que ningún datacenter en Frankfurt resuelve

El motivo de fondo tiene nombre y fecha: el CLOUD Act estadounidense de 2018. Obliga a los proveedores con sede en Estados Unidos a entregar datos bajo requerimiento legal, sin importar en qué país estén almacenados físicamente. Esa es la raíz del kill switch.

La consecuencia es estructural y no se arregla con ingeniería. AWS, Azure o Google Cloud pueden construir todos los datacenters que quieran en Fráncfort, Madrid o Estocolmo, contratar personal europeo y cifrar de extremo a extremo. Aun así difícilmente alcanzan los niveles altos del marco de assurance, porque el problema no es dónde está el servidor, es qué ley puede compelir a la matriz. Las "sovereign clouds" que los hyperscalers anuncian chocan contra su propia legislación nacional. Es un conflicto jurisdiccional, no técnico, y por eso es tan difícil de cerrar.

## Europa regula un mercado que dejó de construir

Los números explican la ansiedad. La cuota de los proveedores cloud europeos cayó del 29% en 2017 al 15% en 2022. Las empresas estadounidenses concentran cerca del 80% del gasto cloud profesional en la EU. Y el continente gasta unos 264.000 millones de euros al año en productos y servicios IT propietarios de origen estadounidense.

Esa es la asimetría incómoda: Europa está regulando una capacidad que en gran parte ya no posee. Hay una crítica honesta a esto, y la articula bien el International Center for Law and Economics: regular el acceso no crea capacidad. El riesgo de la trampa soberanista es quedarse a medias, sin la dependencia que se quería cortar y sin la industria propia que se quería levantar. Restringir no es lo mismo que construir.

## El matiz que el titular se come

Aquí está lo que el gancho del kill switch oculta: CADA no prohíbe a los proveedores estadounidenses. El texto deja sitio a los hyperscalers de forma deliberada. Mantiene el mercado abierto a "like-minded partners", incorpora derogaciones por adecuación GDPR en los niveles intermedios, y los analistas anticipan que la ejecución será lenta. Computerworld lo resumió sin rodeos: la propuesta deja amplio margen para que los proveedores estadounidenses sigan sirviendo al sector público europeo.

No es, entonces, una expulsión. Es un sistema de etiquetado de soberanía que segmenta workloads por sensibilidad y obliga a declarar a qué nivel de assurance llega cada servicio. La mayoría de las cargas no sensibles no se ven afectadas. Lo que cambia es la conversación para lo que sí lo es.

## Qué significa para un equipo en Madrid o Bogotá

Si tu producto toca sector público o industria regulada europea, la matriz de decisión cloud acaba de ganar una columna nueva: la soberanía jurisdiccional ya no es un nice-to-have, es un criterio que va a aparecer en los RFP. El comprador público va a preguntar a qué nivel de assurance llega tu stack, y "corremos sobre AWS" va a necesitar una respuesta más larga.

El efecto práctico es que las arquitecturas portables pasan de buena práctica a cobertura regulatoria. Kubernetes en vez de servicios propietarios de orquestación, Postgres en vez del motor gestionado exclusivo del proveedor, object storage con API estándar, infraestructura como código agnóstica. Todo lo que reduce el lock-in es ahora un hedge. Y el stack europeo, OVHcloud, Scaleway, Hetzner, IONOS, StackIT, gana pipeline comercial sin haber tocado su producto, simplemente por estar del lado correcto de la jurisdicción.

Para Latinoamérica el patrón se repite con otra etiqueta. México y Brasil llevan tiempo discutiendo data residency, y un proveedor que vende a banca o gobierno en la región se encuentra con la misma pregunta: ¿quién puede compeler tus datos? La arquitectura portable es el mismo seguro, sirva para esquivar el CLOUD Act o la ley local de turno.

## Una matización honesta

Tres cautelas antes de migrar nada con prisa.

Primero, es una propuesta, no una ley. Los trílogos pueden diluirla y el calendario europeo es lento por diseño. Construir el roadmap sobre el texto actual es apostar a un borrador.

Segundo, la soberanía tiene precio. Los proveedores europeos no ofrecen paridad de servicios gestionados con los hyperscalers, y migrar workloads tiene un coste real en ingeniería y en features que alguien va a pagar. La soberanía no es gratis, es un trade-off.

Tercero, para el 80% de las cargas no sensibles no cambia nada a corto plazo, y el error opuesto a ignorar la regulación es sobre-reaccionar migrándolo todo. La respuesta correcta es clasificar, no huir.

## Cómo empezar

La receta cabe en cuatro movimientos. Clasificar los workloads por sensibilidad jurisdiccional hoy, antes de que un RFP te obligue con prisa. Medir el lock-in real, es decir, cuántos servicios propietarios gestionados estás usando que no tienen equivalente portable. Pedir a tu proveedor su posición sobre CADA por escrito, porque las respuestas comerciales envejecen mal. Y si vendes a sector público europeo, arrancar el assessment de un proveedor europeo como opción B, no para migrar mañana, sino para no descubrir el coste el día que lo necesites.

## El cierre

Hace meses escribí que [el stack local ya tiene sentido](/posts/el-stack-local-ya-tiene-sentido/). La soberanía jurisdiccional es esa misma conversación a otra escala: la independencia técnica del individuo y la independencia regulatoria del continente son el mismo instinto, controlar tu infraestructura en vez de alquilarla con condiciones que no fijas tú.

El kill switch existe, eso no está en discusión. La única pregunta es quién lo tiene, y cuánto te cuesta a ti que no lo tenga alguien que responde ante otra bandera. Europa acaba de decidir que esa pregunta merece una ley. El resto de nosotros tenemos que decidir si merece una columna nueva en la matriz de arquitectura. Yo creo que sí.

## Fuentes

- [Comisión Europea (3-jun-2026): Strengthening Europe's tech sovereignty](https://commission.europa.eu/news-and-media/news/strengthening-europes-tech-sovereignty-2026-06-03_en): anuncio oficial del paquete.
- [Comisión Europea: Proposal for the Cloud and AI Development Act (CADA)](https://digital-strategy.ec.europa.eu/en/library/proposal-cloud-and-ai-development-act-cada): texto de la propuesta.
- [CNBC (3-jun-2026): Europe unveils tech sovereignty package, "nobody has a kill switch"](https://www.cnbc.com/2026/06/03/europe-tech-sovereignty-us-tech-reliance.html): la cita del título y el contexto.
- [Inside Global Tech (11-jun-2026): The EU Cloud and AI Development Act in Depth](https://www.insideglobaltech.com/2026/06/11/the-eu-cloud-and-ai-development-act-in-depth/): los cuatro niveles de assurance y las cifras de mercado.
- [Computerworld: EU's cloud sovereignty push leaves room for US hyperscalers](https://www.computerworld.com/article/4181816/eu-takes-first-steps-to-reduce-reliance-on-us-hyperscalers.html): el matiz de que la propuesta no excluye a los proveedores estadounidenses.
- [ICLE: Build AI, Don't Block Access, the EU's Digital-Sovereignty Trap](https://laweconcenter.org/resources/build-ai-dont-block-access-the-european-unions-digital-sovereignty-trap/): la crítica a regular sin construir.

*Nota geográfica: este post es nativamente europeo, sin el sesgo USA habitual de los datos de tech. Para Latinoamérica el mecanismo regulatorio difiere (data residency en México y Brasil en lugar de un marco de assurance), pero la pregunta de fondo, qué jurisdicción puede compeler tus datos, y la respuesta arquitectónica, reducir el lock-in, son idénticas.*
