import type { Lesson } from "./types";

export const mageritLessons: Lesson[] = [
  {
    slug: "que-es-magerit", title: "Qué es MAGERIT", minutes: 10, quizId: "magerit",
    summary: "Activos, amenazas, salvaguardas, impacto y riesgo, paso a paso.",
    blocks: [
      { t: "everyday", text: "Antes de irte de vacaciones haces, sin darte cuenta, un análisis de riesgos: ¿qué tengo de valor en casa? (activos), ¿qué podría pasar? (amenazas: robo, inundación), ¿qué protección ya existe? (cerradura, alarma), ¿cuánto me dolería? (impacto)." },
      { t: "p", text: "MAGERIT es una metodología de análisis y gestión de riesgos de los sistemas de información, desarrollada por la administración pública española. Organiza ese razonamiento cotidiano en pasos ordenados y repetibles." },
      { t: "h", text: "Los cinco pasos" },
      { t: "p", text: "1) Activos: qué hay que proteger (datos, sistemas, servicios, personas). 2) Amenazas: qué puede afectarlos. 3) Salvaguardas: los controles que ya existen. 4) Impacto: cuánto daño causaría la amenaza. 5) Riesgo: la combinación de impacto y probabilidad, que luego se trata." },
      { t: "callout", title: "Dimensiones de valoración", text: "Cada activo se valora según lo que importa proteger: disponibilidad (que esté cuando se necesita), integridad (que no se altere sin autorización) y confidencialidad (que solo lo vea quien debe). También se consideran autenticidad y trazabilidad." },
      { t: "business", text: "Activo: la base de datos de clientes de una tienda. Amenaza: acceso no autorizado. Salvaguarda existente: contraseñas. Impacto: alto en confidencialidad. Riesgo residual: medio. Tratamiento: agregar doble verificación y registro de accesos." },
      { t: "callout", title: "Análisis y tratamiento", text: "MAGERIT separa analizar el riesgo de gestionarlo. Tras el análisis, el riesgo se reduce con más salvaguardas, se acepta, se evita o se transfiere (por ejemplo, con un seguro). Esta lección es una explicación didáctica, no sustituye la guía oficial." },
      { t: "interview", text: "Respuesta modelo: «MAGERIT me permite identificar activos y amenazas, valorar impacto y probabilidad considerando las salvaguardas existentes, y proponer un tratamiento para el riesgo residual.»" },
    ],
  },
  {
    slug: "magerit-ejercicio", title: "Ejercicio: valorar un riesgo", minutes: 10, quizId: "magerit",
    summary: "Aplica los pasos con valores hipotéticos y la matriz.",
    blocks: [
      { t: "p", text: "Ejercicio con datos hipotéticos. Activo: base de datos de clientes de una tienda online. Amenaza: acceso no autorizado. Valoración inicial: probabilidad 4 de 5 e impacto 4 de 5 (confidencialidad)." },
      { t: "p", text: "En la matriz de abajo elige el escenario «Caída de la web en temporada alta» como punto de partida o toca la celda 4×4. Luego agrega un control preventivo (por ejemplo, doble verificación) y uno de mitigación (por ejemplo, cifrado de los datos) y observa el riesgo residual." },
      { t: "matrix" },
      { t: "callout", title: "Pregunta para reflexionar", text: "Si el riesgo residual sigue siendo alto, ¿qué decisión tomarías: reforzar salvaguardas, evitar la actividad, transferir el riesgo o aceptarlo? La decisión depende del apetito de riesgo de la organización." },
      { t: "interview", text: "Cierra siempre con una recomendación: «Con las salvaguardas propuestas el riesgo residual baja a un nivel aceptable; recomendaría revisarlo cada trimestre.»" },
    ],
  },
];

export const alternosLessons: Lesson[] = [
  {
    slug: "procesos-alternos", title: "Procesos alternos", minutes: 8, quizId: "alternos-dmaic",
    summary: "El plan B temporal, con controles y conciliación.",
    blocks: [
      { t: "everyday", text: "Se acaba el gas mientras cocinas para visitas. Tu proceso alterno es una estufa eléctrica. Funciona, pero solo para lo urgente, y después compras gas y vuelves a lo normal." },
      { t: "p", text: "Un proceso alterno es un procedimiento temporal y autorizado que permite mantener actividades críticas cuando el proceso habitual no está disponible. No es improvisar: se define antes y se prueba." },
      { t: "callout", title: "Qué lo hace confiable", text: "Autorización clara de quién lo activa, controles equivalentes a los normales (límites, doble revisión), registro de todo lo hecho y conciliación al volver al proceso normal." },
      { t: "business", text: "Caso hipotético: un banco pierde su sistema seis horas. Atiende solo operaciones críticas con formularios manuales, límites de monto y doble firma. Al recuperarse, captura cada formulario en el sistema y concilia saldos." },
      { t: "interview", text: "Respuesta modelo: «Activaría el proceso alterno aprobado, mantendría controles y registro de cada operación y, al restablecerse el sistema, conciliaría y documentaría el incidente.»" },
    ],
  },
  {
    slug: "dmaic", title: "DMAIC: mejora con datos", minutes: 12, quizId: "alternos-dmaic",
    summary: "Cinco pasos y un caso práctico de merma de materiales.",
    blocks: [
      { t: "everyday", text: "Tu recibo de luz sube. Defines el problema (subió una parte importante), mides el consumo por semana, analizas causas (¿el aire acondicionado?), mejoras (cambias hábitos) y controlas el recibo cada mes." },
      { t: "p", text: "DMAIC significa Definir, Medir, Analizar, Mejorar y Controlar. Es un método de mejora continua que sustituye las sospechas por evidencia." },
      { t: "callout", title: "No acuses sin evidencia", text: "Una pérdida puede venir de dosis excesivas, mala medición, errores de registro o robo. Responsabilizar a alguien antes de analizar daña el ambiente de trabajo y puede equivocarse de causa." },
      { t: "case", caseId: "limpieza-merma" },
      { t: "interview", text: "Respuesta modelo: «Definiría el problema, mediría la pérdida con registros, analizaría causas sin atribuir culpas, mejoraría el proceso con estándares y controlaría los resultados con seguimiento periódico.»" },
    ],
  },
];

export const excelLessons: Lesson[] = [
  {
    slug: "excel-formulas", title: "Fórmulas esenciales", minutes: 12, quizId: "excel",
    summary: "SI, CONTAR.SI, SUMAR.SI, BUSCARV y PROMEDIO aplicadas a incidentes.",
    blocks: [
      { t: "everyday", text: "Imagina un cuaderno donde anotas tus gastos. Contar cuántas veces compraste café o sumar lo gastado en transporte es justo lo que hacen CONTAR.SI y SUMAR.SI." },
      { t: "p", text: "Supón una hoja de incidentes con columnas A: Fecha, B: Área, C: Nivel (Bajo, Medio o Alto) y D: Horas caído. Datos hipotéticos." },
      { t: "code", text: "=CONTAR.SI(C2:C100;\"Alto\")            cuenta incidentes altos\n=SUMAR.SI(C2:C100;\"Alto\";D2:D100)    suma horas caídas de los altos\n=PROMEDIO(D2:D100)                  horas promedio por incidente\n=SI(D2>=4;\"Revisar\";\"Normal\")        marca incidentes largos\n=BUSCARV(B2;Areas!A:B;2;FALSO)       trae el responsable del área" },
      { t: "callout", title: "Punto y coma o coma", text: "Según la configuración regional de tu Excel, el separador de argumentos es «;» o «,». Si una fórmula da error, prueba con el otro." },
      { t: "p", text: "BUSCARV busca un valor en la primera columna de otra tabla y devuelve un dato de la misma fila. El último argumento FALSO exige coincidencia exacta. En versiones recientes de Excel existe BUSCARX, más flexible." },
      { t: "interview", text: "Si te piden analizar incidentes: «Usaría filtros para aislar los casos críticos, CONTAR.SI y SUMAR.SI para cuantificarlos y una tabla dinámica para resumirlos por área.»" },
    ],
  },
  {
    slug: "excel-tablas-dinamicas", title: "Filtros y tablas dinámicas", minutes: 10, quizId: "excel",
    summary: "Resume cientos de filas sin escribir fórmulas.",
    blocks: [
      { t: "p", text: "Los filtros ocultan las filas que no te interesan. Una tabla dinámica es más potente: agrupa y resume los datos por categorías, y se actualiza al cambiar los campos." },
      { t: "h", text: "Cómo crear una tabla dinámica" },
      { t: "p", text: "Selecciona cualquier celda de tus datos, ve a Insertar y elige Tabla dinámica. Arrastra «Área» a Filas, «Nivel» a Columnas y «Fecha» a Valores (que contará incidentes). En segundos verás cuántos incidentes hay por área y nivel." },
      { t: "business", text: "Con 300 incidentes hipotéticos, la tabla dinámica muestra que el área de Ventas concentra la mayoría de los incidentes de nivel Alto. Ese hallazgo orienta dónde reforzar controles." },
      { t: "callout", title: "Datos limpios primero", text: "Antes de analizar, revisa que cada columna tenga un solo tipo de dato, que no haya filas vacías y que los nombres estén escritos igual («Ventas» y «ventas » cuentan como distintos)." },
      { t: "interview", text: "Respuesta modelo: «Primero limpio los datos, luego construyo una tabla dinámica por área y nivel para identificar dónde se concentra el riesgo y presentar conclusiones.»" },
    ],
  },
];

export const sqlLessons: Lesson[] = [
  {
    slug: "der", title: "Diagrama entidad-relación (DER)", minutes: 10, quizId: "sql-der",
    summary: "Entidades, atributos, relaciones y cardinalidad.",
    blocks: [
      { t: "everyday", text: "En una escuela, los estudiantes se inscriben en cursos. Un estudiante toma varios cursos y cada curso tiene varios estudiantes. Dibujar esas cosas y cómo se conectan es hacer un DER." },
      { t: "p", text: "Entidad: algo de lo que guardas datos (Cliente, Pedido). Atributo: un dato de la entidad (nombre, fecha). Relación: cómo se conectan. Cardinalidad: cuántos de uno se relacionan con cuántos del otro (uno a uno, uno a muchos, muchos a muchos)." },
      { t: "callout", title: "Llaves", text: "La llave primaria (PK) identifica cada fila de forma única. La llave foránea (FK) apunta a la PK de otra tabla y es la que permite unirlas con JOIN." },
      { t: "business", text: "Un cliente hace muchos pedidos, pero cada pedido es de un solo cliente: relación uno a muchos. La tabla Pedido lleva la columna cliente_id (FK)." },
      { t: "code", text: "Cliente(id PK, nombre, correo)\nPedido(id PK, cliente_id FK, fecha, total)\n\nCliente 1 ---- N Pedido" },
      { t: "interview", text: "Respuesta modelo: «El DER me muestra las entidades, sus atributos y cómo se relacionan; así sé qué tablas unir y por qué columnas.»" },
    ],
  },
  {
    slug: "sql-basico", title: "SQL básico", minutes: 15, quizId: "sql-der",
    summary: "SELECT, WHERE, JOIN y GROUP BY con ejemplos.",
    blocks: [
      { t: "everyday", text: "SQL es como pedirle a un archivista: «tráeme los nombres (SELECT) de la carpeta de clientes (FROM) que vivan en Managua (WHERE)»." },
      { t: "p", text: "Tablas hipotéticas: incidentes(id, area_id, nivel, horas) y areas(id, nombre)." },
      { t: "code", text: "-- Incidentes altos\nSELECT id, area_id, horas\nFROM incidentes\nWHERE nivel = 'Alto';\n\n-- Incidentes por área (une dos tablas)\nSELECT a.nombre, COUNT(*) AS total\nFROM incidentes i\nJOIN areas a ON a.id = i.area_id\nGROUP BY a.nombre;\n\n-- Solo áreas con más de 5 incidentes\nSELECT a.nombre, COUNT(*) AS total\nFROM incidentes i\nJOIN areas a ON a.id = i.area_id\nGROUP BY a.nombre\nHAVING COUNT(*) > 5;" },
      { t: "callout", title: "WHERE y HAVING", text: "WHERE filtra filas antes de agrupar. HAVING filtra los grupos después de agrupar, y por eso se usa con funciones como COUNT." },
      { t: "p", text: "JOIN une tablas usando la relación entre llave foránea y llave primaria. COUNT cuenta filas, SUM suma y AVG promedia dentro de cada grupo." },
      { t: "interview", text: "Respuesta modelo: «Con JOIN uno las tablas por sus llaves, filtro con WHERE y obtengo resúmenes con GROUP BY y funciones como COUNT.»" },
    ],
  },
];
