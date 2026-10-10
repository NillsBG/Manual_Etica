/* Contenido del manual (basado en el manual físico).
   Cada elemento con color usa una clave de la paleta: blue, teal, green, orange, purple, red. */
const DATA = {
  vision: [
    { color: "blue",   icon: "compass", title: "Propósito",         text: "Guiar nuestra conducta profesional con principios y valores." },
    { color: "teal",   icon: "briefcase", title: "¿Qué es la ética profesional?", text: "El conjunto de principios y valores que orientan nuestras decisiones y comportamientos dentro de nuestro entorno." },
    { color: "orange", icon: "bulb", title: "Importancia",       text: "Construye relaciones basadas en la confianza y el respeto, favoreciendo un ambiente laboral positivo y responsable." },
    { color: "purple", icon: "puzzle", title: "Conducta y paradigmas", text: "Nuestra forma de interpretar la realidad influye en cómo actuamos; por eso debemos reconocer nuestros paradigmas y procurar que sean positivos." }
  ],
  values: [
    { name: "Integridad",      color: "blue",   text: "Hacer lo correcto, de acuerdo con nuestros principios." },
    { name: "Respeto",         color: "teal",   text: "Reconocer el valor y los derechos de los demás." },
    { name: "Responsabilidad", color: "orange", text: "Cumplir compromisos y asumir consecuencias." },
    { name: "Honestidad",      color: "green",  text: "Actuar con verdad y transparencia." },
    { name: "Servicio",        color: "purple", text: "Usar nuestras capacidades para ayudar." }
  ],
  principles: [
    { color: "blue",   icon: "chat", title: "Comunicación",        text: "Expresamos nuestras ideas con claridad, escuchamos activamente y respetamos las opiniones de los demás." },
    { color: "green",  icon: "user", title: "Comprender personas", text: "Buscamos comprender el porqué de las acciones, reconocer sus necesidades y considerar diferentes puntos de vista." },
    { color: "orange", icon: "target", title: "Motivar personas",    text: "Reconocemos el esfuerzo de los demás, brindamos apoyo y fomentamos un ambiente que les permita desarrollarse." },
    { color: "purple", icon: "scale", title: "Justicia",            text: "Actuamos de manera equitativa, evitando favoritismos y procurando que nuestras decisiones sean objetivas." },
    { color: "teal",   icon: "gear", title: "Crítica",             text: "Debe realizarse con respeto y con el propósito de mejorar. Aprendemos a recibir observaciones y a usarlas como oportunidad de crecimiento." }
  ],
  pillars: [
    { color: "green",  icon: "rainbow", title: "Honestidad",   text: "Actuamos con transparencia, verdad e integridad en todo lo que hacemos." },
    { color: "purple", icon: "dumbbell", title: "Trabajo duro", text: "Nos esforzamos, somos disciplinados y mantenemos nuestro compromiso con las metas y responsabilidades." },
    { color: "blue",   icon: "heart", title: "Generosidad",  text: "Compartimos nuestro tiempo, conocimiento y recursos cuando podemos ayudar o aportar a los demás." }
  ],
  topics: [
    { color: "red",    icon: "users", title: "Liderazgo",                text: "Guiar con el ejemplo, inspirar y tomar decisiones éticas que beneficien al equipo y a la organización." },
    { color: "teal",   icon: "smile", title: "Inteligencia emocional",   text: "Gestionar nuestras emociones y comprender las de los demás para mejorar la convivencia y el trabajo en equipo." },
    { color: "purple", icon: "link", title: "Trabajo en equipo",        text: "Sumar esfuerzos, respetar opiniones y alcanzar objetivos comunes." },
    { color: "green",  icon: "nodes", title: "Toma de decisiones",       text: "Analizar alternativas, considerar el impacto ético y elegir lo mejor para todos." },
    { color: "orange", icon: "pie", title: "Resolución de conflictos", text: "Escuchar, dialogar y buscar soluciones justas y constructivas." }
  ],
  practice: [
    { tab: "En la vida laboral", color: "blue", items: [
      ["check", "Cumplir nuestras responsabilidades"],
      ["link", "Respetar a compañeros, clientes y proveedores"],
      ["lock", "Mantener la confidencialidad de la información"] ] },
    { tab: "Comportamiento correcto", color: "green", items: [
      ["ear", "Escuchar y valorar las opiniones de los demás"],
      ["clock", "Ser puntuales y responsables"],
      ["scale", "Tratar a todos con igualdad y respeto"] ] },
    { tab: "Ante un conflicto", color: "purple", items: [
      ["search", "Analiza la situación"],
      ["book", "Revisa principios y pilares"],
      ["shield", "Busca asesoría si es necesario"] ] }
  ],
  compass: [
    "¿Estoy actuando con honestidad?",
    "¿Estoy respetando a los demás?",
    "¿Estoy siendo justo?",
    "¿Consideré otros puntos de vista?",
    "¿Mi decisión busca mejorar la situación?",
    "¿Estoy cumpliendo mi responsabilidad?"
  ],
  route: [
    { color: "red",    when: "Sem. 1",   title: "Proyecto ético",             text: "Presentamos el manual." },
    { color: "teal",   when: "Sem. 2",   title: "Identificación",             text: "Reconocemos nuestros valores." },
    { color: "purple", when: "Sem. 3-4", title: "De la visión a la realidad", text: "Vemos cómo influyen en nuestras decisiones." },
    { color: "orange", when: "Sem. 5",   title: "Conducta y paradigmas",      text: "Reflexionamos sobre nuestras acciones." },
    { color: "green",  when: "Sem. 6",   title: "Primera evaluación",         text: "Revisamos avances." },
    { color: "blue",   when: "Sem. 7-8", title: "Seguimiento",                text: "Reforzamos y mejoramos." }
  ],
  commitments: [
    "Actuar con honestidad y transparencia",
    "Respetar y comprender a los demás",
    "Comunicarnos con claridad y respeto",
    "Tratar a todos con justicia",
    "Motivar y apoyar a otros",
    "Dar y recibir críticas constructivas",
    "Compartir nuestro conocimiento",
    "Trabajar con esfuerzo y compromiso"
  ]
};

/* Iconos blancos (trazo lineal, viewBox 24x24) */
DATA.icons = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  puzzle: '<path d="M5 4h5a2 2 0 1 1 4 0h5v5a2 2 0 1 0 0 4v7H5z"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  scale: '<path d="M12 4v16M7 20h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
  rainbow: '<path d="M3 18a9 9 0 0 1 18 0M7 18a5 5 0 0 1 10 0"/>',
  dumbbell: '<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>',
  heart: '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.6 3-6 7-6s7 2.4 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.4.6 4 2.4 4 5"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14a4.5 4.5 0 0 0 8 0M9 9.5h.01M15 9.5h.01"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  nodes: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
  pie: '<path d="M12 3v9h9a9 9 0 1 1-9-9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  ear: '<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M12 9a1.5 1.5 0 0 1 3 0"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M9 7h6"/>',
  shield: '<path d="M12 21s-7-4.5-7-10V5l7-2 7 2v6c0 5.5-7 10-7 10z"/>'
};

/* Casos prácticos: [opción, ¿es la mejor?, retroalimentación] */
DATA.cases = [
  { title: "Un error que nadie notó",
    story: "Descubres que cometiste un error en un reporte que ya se entregó. Nadie lo ha notado. ¿Qué haces?",
    options: [
      ["Me quedo callado; si nadie lo vio, no pasa nada.", false, "Ocultar el error va contra la honestidad y puede crecer hasta afectar a otros."],
      ["Aviso a mi jefe, explico lo ocurrido y propongo cómo corregirlo.", true, "Honestidad y responsabilidad: asumes las consecuencias y aportas una solución."],
      ["Digo que fue culpa de la herramienta o de otra persona.", false, "Culpar a otros rompe la confianza y la responsabilidad."] ] },
  { title: "Elegir a quién promover",
    story: "Debes escoger quién liderará un proyecto: un buen amigo tuyo o una compañera con mejores resultados.",
    options: [
      ["Elijo a mi amigo; confío más en él.", false, "El favoritismo contradice el principio de justicia."],
      ["Defino criterios objetivos y decido con base en ellos.", true, "Justicia: decisiones equitativas, objetivas y que puedes explicar."],
      ["Dejo que otro decida para no incomodarme.", false, "Evitar la decisión no es neutralidad; es evadir la responsabilidad."] ] },
  { title: "Una crítica en público",
    story: "Un compañero critica tu trabajo frente al equipo y te sientes molesto. ¿Cómo respondes?",
    options: [
      ["Le respondo con enojo para defenderme.", false, "Reaccionar sin gestionar la emoción deteriora la convivencia."],
      ["Escucho, pido ejemplos concretos y luego converso con él en privado.", true, "Inteligencia emocional y crítica constructiva: conviertes la observación en crecimiento."],
      ["Lo ignoro y comento con otros lo que pienso de él.", false, "Hablar a espaldas de alguien no resuelve nada y falta al respeto."] ] }
];

/* Repaso: [pregunta, opciones, índice correcto, explicación] */
DATA.quiz = [
  ["¿Cuáles son los tres pilares del manual?", ["Puntualidad, orden y lealtad", "Honestidad, trabajo duro y generosidad", "Liderazgo, justicia y crítica"], 1, "Los pilares son Honestidad, Trabajo duro y Generosidad."],
  ["¿Qué principio nos pide evitar favoritismos?", ["Comunicación", "Motivar personas", "Justicia"], 2, "La justicia busca decisiones equitativas y objetivas."],
  ["¿Cómo debe hacerse la crítica?", ["Con respeto y para mejorar", "Solo en privado y sin explicar", "Con firmeza, aunque duela"], 0, "La crítica es una oportunidad de crecimiento cuando es respetuosa."],
  ["Gestionar nuestras emociones y comprender las de otros es…", ["Resolución de conflictos", "Inteligencia emocional", "Toma de decisiones"], 1, "Es la inteligencia emocional, clave para el trabajo en equipo."],
  ["¿Qué influye en cómo interpretamos la realidad y actuamos?", ["Nuestros paradigmas", "El azar", "La puntualidad"], 0, "Reconocer nuestros paradigmas nos ayuda a que sean positivos."],
  ["Ante un conflicto, el primer paso es…", ["Esperar a que pase", "Analizar la situación", "Buscar un culpable"], 1, "Primero analizamos; luego revisamos principios y pilares, y buscamos asesoría si hace falta."]
];

/* Preguntas para reflexionar */
DATA.prompts = [
  "¿Qué decisión reciente tomaste que refleja alguno de nuestros valores?",
  "¿En qué situación te costó más actuar con honestidad y por qué?",
  "¿Qué paradigma tuyo te gustaría cambiar para actuar mejor?",
  "¿A quién podrías motivar o apoyar esta semana y cómo?"
];