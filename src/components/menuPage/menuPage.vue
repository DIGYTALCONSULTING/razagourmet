<template>
  <navbar class="sticky top-0 right-0 left-0 bg-white shadow-lg z-50 flex justify-between px-4 sm:px-8 lg:px-20 hover:shadow-lg transition-shadow duration-300">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <div class="px-2 flex items-center w-full justify-between">
      <div class="flex items-center w-[30%]">
        <img class="w-[80px] sm:w-[115px]" alt="Logo" src="../../assets/LogoRG.png"> 
          <button 
            @click="toggleMenu"
            class="absolute right-0 md:hidden text-[#4A3728] hover:text-orange-500 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
      </div>  
          <div class="flex justify-between items-center w-[70%] gap-8 ">
              <nav class="text-secondary font-body overflow-hidden md:flex space-x-10 items-center hidden"> <!-- menu pantallas grandes-->
        <a href="#bienvenidos" class="text-[#4A3728] hover:text-orange-500 transition duration-300">
          Bienvenidos a Raza & Gourmet
        </a>
        <a href="#nuestros_productos" class="text-[#4A3728] hover:text-orange-500 transition duration-300">
          Nuestros Productos
        </a>        
        <a href="#conocenos" class="text-[#4A3728] hover:text-orange-500 transition duration-300">
          Conócenos
        </a>
        <a href="#encuentranos" class="text-[#4A3728] hover:text-orange-500 transition duration-300">
          Encuéntranos
        </a>
      </nav>
      <nav 
        v-if="menuOpen" 
        class="absolute top-12 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden"
      >
        <a href="#bienvenidos" class="text-[#4A3728] hover:text-orange-500 transition duration-300">Bienvenidos a Raza & Gourmet</a>
        <a href="#nuestros_productos" class="text-[#4A3728] hover:text-orange-500 transition duration-300">Nuestros Productos</a>    
        <a href="#conocenos" class="text-[#4A3728] hover:text-orange-500 transition duration-300">Conócenos</a>
        <a href="#encuentranos" class="text-[#4A3728] hover:text-orange-500 transition duration-300">Encuéntranos</a>
      </nav>
    </div>
      </div>
  </navbar>
</template>
<script src="./menuPage.js"/>
