import { ref } from "vue";

export default {
  name: "MenuPage",
  setup() {
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };
    return {
      menuOpen,
      toggleMenu
    };
  },
};
