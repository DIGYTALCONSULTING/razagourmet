import { ref } from "vue";

export default {
  name: "CarruselPage",
  setup() {
    const currentIndex = ref(0);
    const images = ref([
      require("@/assets/banner_1.png"),
      require("@/assets/banner_2.png"),
      require("@/assets/banner_3.png"),
    ]);

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + images.value.length) % images.value.length;
    };

    const goToSlide = (index) => {
      currentIndex.value = index; // Cambia al slide específico
    };

    return {
      currentIndex,
      images,
      nextSlide,
      prevSlide,
      goToSlide, // Asegúrate de retornar la función
    };
  },
};
