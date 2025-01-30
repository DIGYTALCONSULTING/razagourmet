import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "CarruselPage",
  setup() {
    const currentIndex = ref(0);
    const images = ref([
      require("@/assets/banner_1.png"),
      require("@/assets/banner_2.png"),
      require("@/assets/banner_3.png"),
    ]);

    let intervalId; // Para almacenar el intervalo y poder detenerlo si es necesario

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + images.value.length) % images.value.length;
    };

    const goToSlide = (index) => {
      currentIndex.value = index;
    };

    // ✅ Función para iniciar el desplazamiento automático
    const startAutoSlide = () => {
      intervalId = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
    };

    // ✅ Función para detener el auto-slide cuando el componente se desmonta
    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };

    // ✅ Iniciar el auto-slide cuando el componente se monte
    onMounted(startAutoSlide);
    // ✅ Detener el auto-slide cuando el componente se desmonte
    onUnmounted(stopAutoSlide);

    return {
      currentIndex,
      images,
      nextSlide,
      prevSlide,
      goToSlide,
      startAutoSlide,
      stopAutoSlide,
    };
  },
};
