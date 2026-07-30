---
title: "Los cinco bugs que mataron mi tesis de maestría"
description: "Ninguno daba error. Los cinco devolvían números perfectamente plausibles. Ocho años después abrí el repo con un modelo al lado y aparecieron en una tarde. Lo que cambió no fue la inteligencia disponible, fue tener contra qué comparar."
date: 2026-07-30
tags: ["robotica", "debugging", "ai", "investigacion", "carrera"]
draft: true
---

Esta línea de Python parece correcta:

```python
J = np.matrix([[0] * DoF] * 6)
```

Es la inicialización de una matriz jacobiana de 6 filas, la que relaciona las velocidades de las articulaciones de un brazo robótico con el movimiento de su pinza. Se rellena justo después con seis asignaciones en coma flotante. Nada en ella llama la atención.

Una lista de ceros enteros de Python produce en NumPy una matriz de tipo `int64`. Las asignaciones que vienen después son valores entre menos uno y uno, y NumPy los trunca hacia cero al escribirlos. El jacobiano salía casi entero en ceros. Su pseudo-inversa era ruido. Y la cinemática inversa que dependía de ella, o sea el objetivo específico número tres de mi trabajo de investigación de maestría, nunca pudo converger.

No hay traza de error. No hay excepción. El programa corre, tarda lo que tiene que tardar y devuelve números.

## El contexto

En diciembre de 2017 me aprobaron el anteproyecto de maestría en la Pontificia Universidad Javeriana: control visual de estacionamiento de precisión para un robot móvil con brazo manipulador. Trabajé en él hasta octubre de 2020 y no lo terminé. La razón inmediata no fue técnica: la universidad y mi director me plantearon que trabajar y estudiar a la vez no era viable, y con mi primera hija en camino dejar de trabajar no era una opción.

Pero antes de esa conversación hubo meses de código que no hacía lo que debía sin que yo supiera por qué.

Este mes abrí ese repo con un modelo al lado. En una tarde aparecieron cinco errores. Ninguno es conceptual: la matemática del informe de avance que escribí en 2018 resultó ser correcta, y lo verifiqué construyendo el mismo robot en una librería de referencia y comparando resultados con nueve decimales de coincidencia. Los cinco son de implementación. Y los cinco son silenciosos.

## Los otros cuatro

**La matriz de masa devuelta como vector.** La dinámica directa armaba la matriz de inercia llamando a la dinámica inversa, pero esa función solo escribía la primera columna, así que devolvía un vector de cinco por uno donde hacía falta una matriz de cinco por cinco. La inversión de la línea siguiente no podía funcionar. Coincide con que la sección "Algoritmo de Dinámica Directa" de mi informe de avance quedó en blanco: llegué hasta ahí y me detuve.

**La aceleración contada dos veces.** En la propagación de aceleraciones de la formulación de Newton-Euler, el mismo término aparecía sumado dos veces en la misma expresión, una directo y otra bajo el nombre `centripeta`. Los torques salían sesgados en proporción a la aceleración de cada articulación. Números plausibles, del orden de magnitud correcto, y mal.

**Centímetros usados como metros.** La tabla de centros de masa de mi propio informe no declaraba unidades. Un eslabón aparecía con una coordenada de 11,397. Leído como metros, eso pone el centro de masa a once metros de la articulación en un brazo de sesenta y cinco centímetros. La única lectura físicamente posible era centímetros. El código los usaba crudos: un factor cien de error en todos los brazos de palanca de la dinámica.

**Dos parámetros transpuestos.** La función que construye la matriz de transformación de cada eslabón leía el ángulo en la posición 2 y la longitud en la posición 3. La tabla que le pasaba estaba en el orden contrario. Con esa transposición, el primer eslabón quedaba con una longitud de 1,57 metros. Un brazo de metro y medio.

Lo más curioso es que en septiembre de 2020 escribí una segunda versión, simbólica, en otro repositorio. Esa sí era consistente. La derivación en papel estaba bien y la implementación numérica no, y las dos convivieron en mi disco duro durante años sin que yo notara que se contradecían.

## El patrón

Los cinco comparten una propiedad: **producen resultados**. Ninguno cae, ninguno lanza una excepción, ninguno deja un stack trace que googlear a las once de la noche.

Ese es el tipo de error que no se resuelve pensando más. Se resuelve teniendo contra qué comparar. Y eso, en 2018, significaba una de dos cosas: o encontrabas a alguien que hubiera implementado lo mismo, o construías tú una segunda implementación independiente para contrastar. Lo primero dependía del horario de tu director. Lo segundo duplicaba el trabajo que precisamente no te estaba saliendo.

Este mes hice exactamente lo segundo, pero me costó una tarde en vez de un semestre: construí el mismo robot en `roboticstoolbox-python`, la librería de Peter Corke, y comparé cinemática directa, jacobianos, torques y matriz de masa sobre veinticinco configuraciones aleatorias. Coincidencia a 1e-9. Con eso, los cinco errores dejaron de ser un misterio y pasaron a ser una lista.

## Y yo también cometí uno

Conviene decirlo porque si no, esto suena a que la máquina llegó y arregló lo que el humano de 2018 no supo.

Mi primera reimplementación de la dinámica mezcló dos convenciones. La recursión de Newton-Euler que aparece en los libros asume una convención de Denavit-Hartenberg donde el eje de cada articulación está en un sitio, y la cinemática que yo estaba usando lo pone en otro. Cambian tres detalles: dónde se suma la velocidad, en qué sistema de referencia se expresa un vector, y sobre qué eje se proyecta el torque final. Es exactamente el mismo tipo de error: silencioso, plausible, sin traza.

Lo cacé en el primer intento, con un brazo de prueba de dos eslabones cuya matriz de inercia se calcula a mano en dos líneas. Debía valer 5 y valía 1.

La diferencia con 2018 no es que ahora no se cometan estos errores. Es que **duran minutos en lugar de años**.

## Esto no es solo robótica

El bug del `int64` tiene primos en cualquier sistema que mueva números. Un cálculo de intereses donde una división entera trunca los céntimos y nadie lo nota hasta la conciliación mensual. Una conversión de divisa donde el redondeo se aplica en el orden equivocado y la diferencia solo aparece en operaciones grandes. Un inventario de retail donde un contador declarado como entero absorbe una fracción de unidad y el descuadre tarda un trimestre en ser visible. Un motor de tarificación de seguros donde un factor está en la unidad equivocada y el resultado sigue estando dentro del rango que un revisor consideraría razonable.

Todos comparten la misma firma: el sistema no se cae, entrega, y lo que entrega está mal en una dirección que ningún test de humo detecta porque el número tiene la pinta correcta.

Y comparten la misma cura: un oráculo independiente. Una segunda implementación, una librería de referencia, un caso analítico calculable a mano. No más inteligencia, más contraste.

## El matiz que hace falta

Dos cosas que este caso no demuestra.

**El modelo no encontró los cinco bugs solo.** El trabajo pesado lo hizo el oráculo, y la decisión de buscar un oráculo fue una decisión de método que hay que saber tomar. Lo que la IA aportó fue velocidad para construirlo: portar el modelo, montar la comparación y leer el código de 2020 en paralelo. Sin la librería de referencia, un modelo leyendo ese código habría podido señalar el `int64` (es un patrón conocido) pero difícilmente las unidades de la tabla de centros de masa, que solo se ven al cruzar el número con la geometría del robot.

**Y la IA también produce este tipo de bug.** Un modelo genera con facilidad código que corre y devuelve números plausibles y equivocados, que es literalmente la categoría de la que trata este post. La conclusión razonable no es "ahora hay menos bugs silenciosos" sino "ahora hay que ser más disciplinado con los oráculos, porque el volumen de código plausible subió".

**Nivel de evidencia**: esto es un caso único, mío, auto-reportado y sin grupo de control. No es un experimento. Es un dato con nombre y apellido, y el código está público para quien quiera contrastarlo.

## Fuentes

- [Repositorio del trabajo](https://github.com/macuartin/youbot), rama `rescate-2026`. Los paquetes originales de 2020 están intactos en `legacy/` y los cinco bugs documentados en `docs/baseline-2018.md`.
- [Robotics Toolbox for Python, de Peter Corke](https://github.com/petercorke/robotics-toolbox-python): la librería que sirvió de oráculo independiente.
- [NumPy: the absolute basics for beginners, sección de tipos de datos](https://numpy.org/doc/stable/user/absolute_beginners.html): el comportamiento de truncamiento por dtype está documentado, que es lo que hace al bug tan traicionero.
- [kirillin/youbot_arm_kinematics](https://github.com/kirillin/youbot_arm_kinematics): la implementación de referencia contra la que se resolvieron dos discrepancias del modelo que en 2018 quedaron sin zanjar.

*Nota geográfica: el contexto institucional es colombiano, de un programa de maestría presencial con dedicación de laboratorio. La estructura del problema, investigación de posgrado hecha en solitario y en paralelo a un trabajo a tiempo completo, se repite en España e Hispanoamérica con las mismas condiciones. En sistemas donde el doctorado es un empleo remunerado con un grupo alrededor, la parte de "depurar solo" pesa bastante menos.*
