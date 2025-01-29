export default {
  data() {
    return {
      isOpen: false,
      userInput: "",
      messages: [
        { text: "¡Hola! Soy el asistente virtual de Raza & Gourmet.", sender: "bot" },
        { text: "Puedes preguntarme sobre nuestros productos, ubicación, horarios, envíos y más.", sender: "bot" },
        { text: "Escribe tu consulta en el cuadro de texto y presiona enviar.", sender: "bot" },
      ],
      respuestas: {
        productos: ["Ofrecemos alimentos naturales y personalizados para perros y gatos."],
        ubicacion: ["Estamos en Tv. 113f #64A-12 Local 9, Bogotá."],
        contacto: ["Puedes contactarnos al WhatsApp +57 322 468 1595."],
        beneficios: ["Nuestros productos mejoran la digestión y aumentan la vitalidad de tu mascota."],
        horario: ["Abrimos de lunes a viernes de 9:00 AM a 6:00 PM y los sábados de 10:00 AM a 4:00 PM."],
        envio: ["Hacemos envíos a nivel nacional en Colombia."],
        "razas pequeñas": ["Contamos con opciones especiales para razas pequeñas."],
      },
      preguntasRapidas: [
        "¿Qué productos tienen?",
        "¿Dónde están ubicados?",
        "¿Qué horarios manejan?",
        "¿Tienen envíos?",
      ],
      loading: true, // Indicador de carga
    };
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
    sendMessage() {
      if (this.userInput.trim() === "") return;

      this.messages.push({ text: this.userInput, sender: "user" });

      const pregunta = this.userInput.toLowerCase().trim();
      const respuesta = this.buscarRespuesta(pregunta);

      this.loading = true;
      setTimeout(() => {
        this.messages.push({
          text: respuesta || "Lo siento, no entendí tu pregunta. ¿Puedes intentar de nuevo?",
          sender: "bot",
        });
        this.loading = false;
        this.scrollToBottom();
      }, 1000);

      this.userInput = "";
    },
    buscarRespuesta(pregunta) {
      const palabrasClave = Object.keys(this.respuestas);
      for (const clave of palabrasClave) {
        if (pregunta.includes(clave)) {
          const posiblesRespuestas = this.respuestas[clave];
          return posiblesRespuestas[Math.floor(Math.random() * posiblesRespuestas.length)];
        }
      }
      return null;
    },
    enviarPreguntaRapida(pregunta) {
      this.userInput = pregunta;
      this.sendMessage();
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const chatContainer = document.querySelector(".messages");
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      });
    },
  },
  computed: {
    mostrarPreguntasRapidas() {
      // Mostrar preguntas rápidas solo si no hay mensajes de usuario
      return this.messages.length === 3; // Cambiar según el número de mensajes iniciales
    },
  },
};
