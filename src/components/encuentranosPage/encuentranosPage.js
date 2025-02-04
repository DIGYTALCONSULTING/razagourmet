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

    // Enviar formulario a Google Sheets
    const enviarFormulario = async () => {
      const datos = {
        nombre: nombre.value,
        celular: celular.value,
        mensaje: mensaje.value,
      };

      try {
        await fetch("https://script.google.com/macros/s/AKfycbyEC2-NAW8NXXB_B-GZS0DoJmJEeOhUGxK8k6tBi5BXjw_I7unAG5dp_g-wbAlQZWXKFQ/exec", { // Reemplaza con la URL de tu Web App
          method: "POST",
          mode: "no-cors", // 👈 Esto evita el problema de CORS
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        });

        console.log("Solicitud enviada correctamente");
        alert("✅ Datos enviados correctamente a Google Sheets");

        // Limpiar los campos del formulario después del envío exitoso
        nombre.value = "";
        celular.value = "";
        mensaje.value = "";
        dataConsent.value = false;
      } catch (error) {
        console.error("Error:", error);
        alert("⚠️ Hubo un problema al enviar los datos.");
      }
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
