<template>
    <section class="jusfify-start py-2 px-4 mx-auto  md:px-8 border-gray-500 scroll-mt-[4rem]" id="bienvenidos"> 
      <h1 class="text-primary font-display text-2xl sm:text-3xl md:text-4xl text-center">Bienvenidos a Raza&Gourmet</h1>
      <p class="text-secondary font-body text-sm sm:text-lg text-center mt-2">Nuestros productos están diseñados para tu mascota, conoce sus beneficios.      
      </p>  
      <!--Carrousel-->
      <div class="overflow-hidden max-w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] mx-auto"
      >
      <!-- Slides Container -->
        <div class="flex items-center">
          <div 
            class="flex transition-transform duration-1000 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            id="carouselSlides"
            @mouseenter="stopAutoSlide"
            @mouseleave="startAutoSlide"
            >
            <img v-for="(image, index) in images" 
            :key="index" 
            :src="image"
            alt="bannercarrusel" 
            class="w-full h-full flex-shrink-0 object-cover shadow-lg"/>
          </div>
        <div>
          <button 
              @click="prevSlide" 
              id="prevButton"
              class="absolute left-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-black/80"
            >
              <i class="fa-solid fa-arrow-left"></i>
          </button>
            <button 
              @click="nextSlide" 
              id="nextButton"
              class="absolute right-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-black/80"
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
      </div>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-y-2"></div>
        <button class="ml-1"
        v-for="(image, index) in images" 
        :key="index" 
        @click="goToSlide(index)" 
        :class="{
          'w-6 h-3 rounded-full bg-primary': currentIndex === index,
          'w-3 h-3 rounded-full bg-gray-500': currentIndex !== index
        }"
        ></button>  
      </div>      
      <div class="w-full h-[1px] bg-orange-500 mt-2"></div> 
	</section>
</template>
<script src="./carruselPage.js"/>