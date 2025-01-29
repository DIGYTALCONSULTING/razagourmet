import { ref, computed } from "vue";

export default {
  name: "encuentranosPage",
  setup() {
    // Estados para el formulario
    const nombre = ref("");
    const celular = ref("");
    const mensaje = ref("");
    const dataConsent = ref(false);

    // Modal de política de privacidad
    const mostrarModal = ref(false);

    const abrirModal = () => {
      mostrarModal.value = true;
    };

    const cerrarModal = () => {
      mostrarModal.value = false;
    };

    // Métodos para sanitizar y validar campos
    const sanitizeInput = (field) => {
      if (field === "nombre" || field === "mensaje") {
        if (field === "nombre") {
          nombre.value = nombre.value.replace(/[^a-zA-Z0-9 áéíóúÁÉÍÓÚñÑ]/g, ""); // Solo caracteres válidos
        } else if (field === "mensaje") {
          mensaje.value = mensaje.value.replace(/[^a-zA-Z0-9 áéíóúÁÉÍÓÚñÑ]/g, ""); // Solo caracteres válidos
        }
      }
    };

    const validateNumeric = (field) => {
      if (field === "celular") {
        celular.value = celular.value.replace(/[^0-9]/g, ""); // Solo números
      }
    };

    // Validación del formulario
    const formValido = computed(() => {
      return (
        nombre.value.trim() !== "" &&
        celular.value.trim() !== "" &&
        mensaje.value.trim() !== "" &&
        dataConsent.value
      );
    });

    const enviarFormulario = () => {
      console.log({
        nombre: nombre.value,
        celular: celular.value,
        mensaje: mensaje.value,
        dataConsent: dataConsent.value,
      });

      alert("Formulario enviado con éxito.");

      // Limpiar los campos del formulario
      nombre.value = "";
      celular.value = "";
      mensaje.value = "";
      dataConsent.value = false;
    };

    // Estado y lógica para el menú
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    // Devolver todas las propiedades y métodos
    return {
      nombre,
      celular,
      mensaje,
      dataConsent,
      mostrarModal,
      abrirModal,
      cerrarModal,
      sanitizeInput,
      validateNumeric,
      formValido,
      enviarFormulario,
      menuOpen,
      toggleMenu,
    };
  },
};
