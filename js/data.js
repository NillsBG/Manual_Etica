/* Contenido del manual (basado en el manual físico).
   Cada elemento con color usa una clave de la paleta: blue, teal, green, orange, purple, red. */
const DATA = {
  vision: [
    { color: "blue",   icon: "compass", title: "Propósito",         text: "Guiar nuestra conducta profesional con principios y valores." },
    { color: "teal",   icon: "briefcase", title: "¿Qué es la ética profesional?", text: "El conjunto de principios y valores que orientan nuestras decisiones y comportamientos dentro de nuestro entorno." },
    { color: "orange", icon: "lightbulb", title: "Importancia",       text: "Construye relaciones basadas en la confianza y el respeto, favoreciendo un ambiente laboral positivo y responsable." },
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
    { color: "blue",   icon: "message-circle", title: "Comunicación",        text: "Expresamos nuestras ideas con claridad, escuchamos activamente y respetamos las opiniones de los demás." },
    { color: "green",  icon: "user-round", title: "Comprender personas", text: "Buscamos comprender el porqué de las acciones, reconocer sus necesidades y considerar diferentes puntos de vista." },
    { color: "orange", icon: "target", title: "Motivar personas",    text: "Reconocemos el esfuerzo de los demás, brindamos apoyo y fomentamos un ambiente que les permita desarrollarse." },
    { color: "purple", icon: "scale", title: "Justicia",            text: "Actuamos de manera equitativa, evitando favoritismos y procurando que nuestras decisiones sean objetivas." },
    { color: "teal",   icon: "settings", title: "Crítica",             text: "Debe realizarse con respeto y con el propósito de mejorar. Aprendemos a recibir observaciones y a usarlas como oportunidad de crecimiento." }
  ],
  pillars: [
    { color: "green",  icon: "rainbow", title: "Honestidad",   text: "Actuamos con transparencia, verdad e integridad en todo lo que hacemos." },
    { color: "purple", icon: "biceps-flexed", title: "Trabajo duro", text: "Nos esforzamos, somos disciplinados y mantenemos nuestro compromiso con las metas y responsabilidades." },
    { color: "blue",   icon: "hand-heart", title: "Generosidad",  text: "Compartimos nuestro tiempo, conocimiento y recursos cuando podemos ayudar o aportar a los demás." }
  ],
  topics: [
    { color: "red",    icon: "flag", title: "Liderazgo",                text: "Guiar con el ejemplo, inspirar y tomar decisiones éticas que beneficien al equipo y a la organización." },
    { color: "teal",   icon: "brain", title: "Inteligencia emocional",   text: "Gestionar nuestras emociones y comprender las de los demás para mejorar la convivencia y el trabajo en equipo." },
    { color: "purple", icon: "handshake", title: "Trabajo en equipo",        text: "Sumar esfuerzos, respetar opiniones y alcanzar objetivos comunes." },
    { color: "green",  icon: "split", title: "Toma de decisiones",       text: "Analizar alternativas, considerar el impacto ético y elegir lo mejor para todos." },
    { color: "orange", icon: "messages-square", title: "Resolución de conflictos", text: "Escuchar, dialogar y buscar soluciones justas y constructivas." }
  ],
  practice: [
    { tab: "En la vida laboral", color: "blue", items: [
      ["circle-check", "Cumplir nuestras responsabilidades"],
      ["handshake", "Respetar a compañeros, clientes y proveedores"],
      ["lock", "Mantener la confidencialidad de la información"] ] },
    { tab: "Comportamiento correcto", color: "green", items: [
      ["ear", "Escuchar y valorar las opiniones de los demás"],
      ["clock", "Ser puntuales y responsables"],
      ["scale", "Tratar a todos con igualdad y respeto"] ] },
    { tab: "Ante un conflicto", color: "purple", items: [
      ["search", "Analiza la situación"],
      ["book-open", "Revisa principios y pilares"],
      ["life-buoy", "Busca asesoría si es necesario"] ] }
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

/* Iconos blancos: Lucide (lucide.dev, licencia ISC), viewBox 24x24 */
DATA.icons = {
  'biceps-flexed': '<path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" /> <path d="M15 14a5 5 0 0 0-7.584 2" /> <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />',
  'book-open': '<path d="M12 5v16" /> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',
  'brain': '<path d="M12 18V5" /> <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /> <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /> <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /> <path d="M18 18a4 4 0 0 0 2-7.464" /> <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /> <path d="M6 18a4 4 0 0 1-2-7.464" /> <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />',
  'briefcase': '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /> <rect width="20" height="14" x="2" y="6" rx="2" />',
  'circle-check': '<circle cx="12" cy="12" r="10" /> <path d="m16 9-5.5 5.5L8 12" />',
  'clock': '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" />',
  'compass': '<circle cx="12" cy="12" r="10" /> <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />',
  'ear': '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" /> <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />',
  'flag': '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />',
  'hand-heart': '<path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" /> <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" /> <path d="m2 15 6 6" /> <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />',
  'handshake': '<path d="m11 17 2 2a1 1 0 1 0 3-3" /> <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /> <path d="m21 3 1 11h-2" /> <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /> <path d="M3 4h8" />',
  'life-buoy': '<circle cx="12" cy="12" r="10" /> <path d="m4.93 4.93 4.24 4.24" /> <path d="m14.83 9.17 4.24-4.24" /> <path d="m14.83 14.83 4.24 4.24" /> <path d="m9.17 14.83-4.24 4.24" /> <circle cx="12" cy="12" r="4" />',
  'lightbulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /> <path d="M9 18h6" /> <path d="M10 22h4" />',
  'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" />',
  'message-circle': '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />',
  'messages-square': '<path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /> <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />',
  'puzzle': '<path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />',
  'rainbow': '<path d="M22 17a10 10 0 0 0-20 0" /> <path d="M6 17a6 6 0 0 1 12 0" /> <path d="M10 17a2 2 0 0 1 4 0" />',
  'scale': '<path d="M12 3v18" /> <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" /> <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" /> <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" /> <path d="M7 21h10" />',
  'search': '<path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />',
  'settings': '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /> <circle cx="12" cy="12" r="3" />',
  'split': '<path d="M16 3h5v5" /> <path d="M8 3H3v5" /> <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" /> <path d="m15 9 6-6" />',
  'target': '<circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" />',
  'user-round': '<circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" />'
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