/* Contenido del manual (basado en el manual físico).
   Cada elemento con color usa una clave de la paleta: blue, teal, green, orange, purple, red. */
const DATA = {
  vision: [
    { color: "blue",   icon: "🧭", title: "Propósito",         text: "Guiar nuestra conducta profesional con principios y valores." },
    { color: "teal",   icon: "💼", title: "¿Qué es la ética profesional?", text: "El conjunto de principios y valores que orientan nuestras decisiones y comportamientos dentro de nuestro entorno." },
    { color: "orange", icon: "💡", title: "Importancia",       text: "Construye relaciones basadas en la confianza y el respeto, favoreciendo un ambiente laboral positivo y responsable." },
    { color: "purple", icon: "🧩", title: "Conducta y paradigmas", text: "Nuestra forma de interpretar la realidad influye en cómo actuamos; por eso debemos reconocer nuestros paradigmas y procurar que sean positivos." }
  ],
  values: [
    { name: "Integridad",      color: "blue",   text: "Hacer lo correcto, de acuerdo con nuestros principios." },
    { name: "Respeto",         color: "teal",   text: "Reconocer el valor y los derechos de los demás." },
    { name: "Responsabilidad", color: "orange", text: "Cumplir compromisos y asumir consecuencias." },
    { name: "Honestidad",      color: "green",  text: "Actuar con verdad y transparencia." },
    { name: "Servicio",        color: "purple", text: "Usar nuestras capacidades para ayudar." }
  ],
  principles: [
    { color: "blue",   icon: "💬", title: "Comunicación",        text: "Expresamos nuestras ideas con claridad, escuchamos activamente y respetamos las opiniones de los demás." },
    { color: "green",  icon: "🧠", title: "Comprender personas", text: "Buscamos comprender el porqué de las acciones, reconocer sus necesidades y considerar diferentes puntos de vista." },
    { color: "orange", icon: "🎯", title: "Motivar personas",    text: "Reconocemos el esfuerzo de los demás, brindamos apoyo y fomentamos un ambiente que les permita desarrollarse." },
    { color: "purple", icon: "⚖️", title: "Justicia",            text: "Actuamos de manera equitativa, evitando favoritismos y procurando que nuestras decisiones sean objetivas." },
    { color: "teal",   icon: "🔧", title: "Crítica",             text: "Debe realizarse con respeto y con el propósito de mejorar. Aprendemos a recibir observaciones y a usarlas como oportunidad de crecimiento." }
  ],
  pillars: [
    { color: "green",  icon: "🌈", title: "Honestidad",   text: "Actuamos con transparencia, verdad e integridad en todo lo que hacemos." },
    { color: "purple", icon: "💪", title: "Trabajo duro", text: "Nos esforzamos, somos disciplinados y mantenemos nuestro compromiso con las metas y responsabilidades." },
    { color: "blue",   icon: "💙", title: "Generosidad",  text: "Compartimos nuestro tiempo, conocimiento y recursos cuando podemos ayudar o aportar a los demás." }
  ],
  topics: [
    { color: "red",    icon: "👥", title: "Liderazgo",                text: "Guiar con el ejemplo, inspirar y tomar decisiones éticas que beneficien al equipo y a la organización." },
    { color: "teal",   icon: "🧠", title: "Inteligencia emocional",   text: "Gestionar nuestras emociones y comprender las de los demás para mejorar la convivencia y el trabajo en equipo." },
    { color: "purple", icon: "🤝", title: "Trabajo en equipo",        text: "Sumar esfuerzos, respetar opiniones y alcanzar objetivos comunes." },
    { color: "green",  icon: "🔀", title: "Toma de decisiones",       text: "Analizar alternativas, considerar el impacto ético y elegir lo mejor para todos." },
    { color: "orange", icon: "🕊️", title: "Resolución de conflictos", text: "Escuchar, dialogar y buscar soluciones justas y constructivas." }
  ],
  practice: [
    { tab: "En la vida laboral", color: "blue", items: [
      ["✅", "Cumplir nuestras responsabilidades"],
      ["🤝", "Respetar a compañeros, clientes y proveedores"],
      ["🔒", "Mantener la confidencialidad de la información"] ] },
    { tab: "Comportamiento correcto", color: "green", items: [
      ["👂", "Escuchar y valorar las opiniones de los demás"],
      ["⏰", "Ser puntuales y responsables"],
      ["⚖️", "Tratar a todos con igualdad y respeto"] ] },
    { tab: "Ante un conflicto", color: "purple", items: [
      ["🔍", "Analiza la situación"],
      ["📖", "Revisa principios y pilares"],
      ["🙋", "Busca asesoría si es necesario"] ] }
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