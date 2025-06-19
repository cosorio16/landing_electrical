const services = [
  {
    title: "Instalación, Mantenimiento y Reparación de Redes Eléctricas",
    description:
      "En instalaciones residenciales, comerciales e industriales, garantizo un trabajo seguro y de calidad: desde cables, tableros y protecciones eléctricas, hasta diagnósticos precisos y reparaciones urgentes. Mi experiencia como electricista en Barranquilla me permite ofrecer soluciones adaptadas a tus necesidades y cumpliendo con las normas vigentes de seguridad.",
  },
  {
    title: "Instalación y Mantenimiento de Aires Acondicionados",
    description:
      "¿Tu aire acondicionado no enfría bien o hace ruidos extraños? Realizo instalación de equipos inverter y convencionales, alineado con las mejores prácticas para maximizar eficiencia energética. Además, ofrezco mantenimiento preventivo y correctivo: limpieza de filtros, verificación de gas refrigerante y optimización de rendimiento.",
  },
  {
    title: "Instalación de Paneles Solares ",
    description:
      "Transforma tu hogar o negocio en una fuente de energía limpia y ahorra en tu factura eléctrica. Diseño e instalo sistemas solares fotovoltaicos (conexión a red o aislados) para residencias, fincas y empresas. Cimentación, estructuras metálicas, cableado y puesta en marcha con mediciones de rendimiento garantizado.",
  },
];

const process = [
  {
    title: "Diagnóstico y Evaluación",
    description:
      "Agendamos una visita técnica para levantar los planos eléctricos, medir consumos y revisar el estado actual de tu instalación. Este diagnóstico completo tiene un valor de $70.000 COP e incluye asesoría personalizada desde el primer momento.",
  },
  {
    title: "Propuesta Económica Detallada",
    description:
      "Te entrego un presupuesto claro y desglosado, sin letra pequeña: incluye materiales, mano de obra, tiempos de ejecución y condiciones de garantía, todo adaptado a tus necesidades.",
  },
  {
    title: "Ejecución con Estándares de Calidad",
    description:
      "Realizo la instalación o mantenimiento usando herramientas certificadas, cámaras termográficas y protocolos técnicos que garantizan seguridad, eficiencia y atención al detalle.",
  },
  {
    title: "Entrega y Capacitación",
    description:
      "Finalizado el trabajo, realizo pruebas técnicas, entrego certificación del servicio y te brindo una breve capacitación para el uso y mantenimiento básico del sistema instalado.",
  },
];

const faq = [
  {
    title: "¿Atiendes solo en Barranquilla o todo el Atlántico?",
    description:
      "Atiendo en toda la región del Atlántico (Barranquilla, Soledad, Malambo, Sabanalarga, etc.). Para proyectos fuera de esta área, coordino visitas programadas y presupuestos de traslados.",
  },
  {
    title:
      "¿Cuál es el tiempo promedio para la instalación de un sistema de paneles solares doméstico?",
    description:
      "Usualmente, la instalación completa de un sistema residencial (4 a 6 paneles) toma entre 2 y 3 días hábiles, dependiendo de la complejidad del techo y las instalaciones eléctricas previas.",
  },
  {
    title:
      "¿Ofreces garantía en los trabajos de instalación eléctrica y climatización?",
    description:
      "Sí. Todas mis instalaciones eléctricas cuentan con 12 meses de garantía por mano de obra. Los equipos (aire acondicionado, inversores solares) tienen garantía del fabricante, la cual gestiono en tu nombre si surge alguna falla.",
  },
  {
    title: "¿Puedo solicitar una cotización en línea sin compromiso?",
    description:
      "Claro. Simplemente completa el formulario de contacto o envía un mensaje directo por WhatsApp con los detalles de tu proyecto (ubicación, tipo de servicio, planos si los tienes) y recibirás tu propuesta en menos de 24 horas.",
  },
  {
    title:
      "¿Qué marcas trabajas para sistemas de aire acondicionado y paneles solares?",
    description:
      "Siempre adapto la elección de marcas según tu presupuesto y disponibilidad local.",
  },
];

const messages = {
  header:
    "Hola, vi tu página web y me gustaría saber más sobre tus servicios. ¿Estás disponible?",
  price:
    "Hola, quiero solicitar una cotización para un servicio eléctrico. ¿Qué información necesitas?",
  wires:
    "Hola, necesito ayuda con la instalación o reparación de una red eléctrica. ¿Podrías visitarme o darme más detalles?",
  airs: "Hola, estoy interesado en instalar un aire acondicionado o hacerle mantenimiento. ¿Podrías asesorarme?",
  solarPanels:
    "Hola, quiero saber más sobre la instalación de paneles solares. ¿Me puedes asesorar?",
  footer:
    "Hola, llegué al final de tu página web y quiero cotizar un servicio. ¿Dónde te puedo enviar los detalles?",
};

export default { services, faq, process, messages };
