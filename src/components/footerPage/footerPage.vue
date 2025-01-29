<template>
<footer class="mt-4 bg-gradient-to-r from-[#030303de] to-[#ce8c53] text-white py-2">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
    <!-- About Us -->
    <div>
      <h3 class="text-xl font-semibold mb-2">Raza & Gourmet</h3>
      <p class="text-sm">
        En Raza & Gourmet ofrecemos comida saludable y natural para tus mascotas, promoviendo su bienestar y felicidad con productos de la más alta calidad.
      </p>
      <p class="text-sm mt-1">© 2024 Raza & Gourmet. Todos los derechos reservados.</p>
    </div>

    <!-- Quick Links -->
    <div>
      <h3 class="text-xl font-semibold mb-2">Enlaces Rápidos</h3>
      <ul class="space-y-1 text-sm">
        <li><a href="#bienvenidos" class="hover:underline">Bienvenidos a Raza & Gourmet</a></li>
        <li><a href="#nuestros_productos" class="hover:underline">Nuestros Productos</a></li>
        <li><a href="#conocenos" class="hover:underline">Conócenos</a></li>
        <li><a href="#encuentranos" class="hover:underline">Encuéntranos</a></li>
      </ul>
    </div>

    <!-- Contact & Social Media -->
    <div>
      <h3 class="text-xl font-semibold mb-2">Contáctanos</h3>
      <ul class="space-y-1 text-sm">
        <li>Email: <a href="mailto:info@razagourmet.com" class="hover:underline">info@razagourmet.com</a></li>
        <li>Teléfono: <a href="tel:+573001234567" class="hover:underline">+57 310 417 4496</a></li>
        <li>WhatsApp: <a href="https://wa.me/3104174496" target="_blank" class="hover:underline">+57 310 417 4496</a></li>
      </ul>
      <div class="flex space-x-4 mt-2">
        <a href="https://www.instagram.com/raza_gourmet/" target="_blank" class="text-white text-2xl hover:text-red-400">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://www.facebook.com/search/top/?q=raza%20%26%20gourmet" target="_blank" class="text-white text-2xl hover:text-blue-400">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a href="https://wa.me/573001234567" target="_blank" class="text-white text-2xl hover:text-green-400">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </div>
  </div>

  <!-- Developer Info -->
  <div class="bg-gradient-to-bl from-[#ce8c53] to-[#030303de] ">
    <p class="text-sm text-gray-300 text-center mt-4">
      Página web diseñada y desarrollada por <a href="https://www.digytalconsulting.com" class="font-semibold text-white hover:underline" target="_blank">Digytal Consulting</a>.
    </p>
    <!--img src="@/assets/DYClogo_ajustado.png" alt="Logo Digytal Consulting" class="h-10" -->
  </div>
</footer>
</template>