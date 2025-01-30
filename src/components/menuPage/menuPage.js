import { ref } from "vue";

export default {
  name: "MenuPage",
  setup() {
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const reloadPage = () => {
      window.location.reload(); // Recarga la página completamente
    };

    return {
      menuOpen,
      toggleMenu,
      reloadPage, // Exportamos la función para usarla en el template
    };
  },
};
