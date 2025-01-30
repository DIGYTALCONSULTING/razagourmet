<template>
  <section class="bg-gray-50 px-6 p-4 scroll-mt-[4rem]" id="encuentranos">
    <div class="container mx-auto">
      <!-- Header -->
      <h2 class="text-primary font-display text-2xl sm:text-3xl md:text-4xl text-center">
        Encuéntranos
      </h2>
      <p class="text-center text-gray-600 text-lg mb-4 max-w-2xl mx-auto">
        Déjanos tus datos para contactarte y brindarte información personalizada, conecta con nosotros en redes sociales o visítanos en nuestro punto de venta.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <!-- Social Media -->
        <div>
          <h3 class="text-primary font-display text-sm sm:text-3xl md:text-4xl text-left mb-4">
            Nuestras Redes
          </h3>
          <ul class="flex gap-10">
            <li>
              <a href="https://www.instagram.com/raza_gourmet/" target="_blank"
                 class="flex items-center space-x-4 hover:text-[#f3132b] pt-8">
                <font-awesome-icon :icon="['fab', 'instagram']" class="w-10 h-10 rounded-full" />
                <span class="text-lg text-gray-700">Instagram</span>
              </a>
            </li>
          </ul>
          <ul class="flex gap-10">
            <li>
              <a href="https://web.facebook.com/profile.php/?id=100094371744076&_rdc=1&_rdr" target="_blank"
                 class="flex items-center space-x-4 hover:text-[#1346f3] pt-8">
                <font-awesome-icon :icon="['fab', 'facebook']" class="w-10 h-10 rounded-full" />
                <span class="text-lg text-gray-700">Facebook</span>
              </a>
            </li> 
          </ul>
          <ul class="flex gap-10">
            <li>
              <a href="https://wa.me/573224681595" target="_blank"
                 class="flex items-center space-x-4 hover:text-[#43f313] pt-8">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-10 h-10 rounded-full" />
                <span class="text-lg text-gray-700">WhatsApp</span>
              </a>
            </li> 
          </ul>        
        </div>
        <!-- Formulario -->
        <div class="flex flex-col space-y-8">
          <h3 class="text-primary font-display text-1xl sm:text-3xl md:text-4xl text-left">
            Déjanos tus datos
          </h3>

          <div class="grid grid-cols-1 text-gray-700 mb-2 pt-4">
            <input
              class="mb-4 py-4 pt-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 bg-gradient-to-tr  from-orange-400 via-orange-950 to-orange-400 text-white placeholder-white"
              type="text"
              v-model="nombre"
              placeholder="Nombre*"
              maxlength="50"
              @input="sanitizeInput('nombre')"
            />
            <input
              class="mb-4 py-4 pt-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 bg-gradient-to-tr from-orange-600 via-orange-950 to-orange-600 text-white placeholder-white"
              type="text"
              v-model="celular"
              placeholder="Celular*"
              maxlength="10"
              @input="sanitizeInput('celular')"
            />
            <textarea
              class="mb-4 py-4 pt-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 bg-gradient-to-tr  from-orange-600 via-orange-950 to-orange-600 text-white placeholder-white"
              v-model="mensaje"
              placeholder="Mensaje*"
              required
              maxlength="150"
              @input="sanitizeInput('mensaje')"
            ></textarea>
          </div>
          
          <div class="flex items-center">
            <input
              id="dataConsent"
              type="checkbox"
              v-model="dataConsent"
              class="w-5 h-5 text-orange-500 border-orange-300 rounded focus:ring focus:ring-blue-300"
            />
            <label for="dataConsent" class="ml-2 text-sm text-gray-700">
              Autorizo el tratamiento de mis datos personales de acuerdo con la
              <button @click.prevent="abrirModal" class="text-orange-500 underline">
                Política de Privacidad
              </button>.
            </label>
          </div>
          <button
            @click="enviarFormulario"
            :disabled="!formValido"
            class="mt-2 px-4 py-2 text-white rounded-md hover:bg-orange-600"
            :class="formValido ? 'bg-orange-900' : 'bg-gray-400 cursor-not-allowed'"
          >
            Enviar
          </button>
        </div>
        <!-- Punto de Venta -->
        <div class="flex flex-col space-y-8">
          <h3 class="text-primary font-display text-1xl sm:text-3xl md:text-4xl text-left">
            Punto de Venta
          </h3>
          <p class="text-gray-700 mb-4 pt-4">
            Visítanos en nuestro punto de venta físico para conocer más sobre nuestros productos.
          </p>
          <!-- Mapa -->
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.435234759218!2d-74.06471702524837!3d4.693673144335166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9957cf9c6e2b%3A0x58b658ff45521ae7!2sTv.%20113f%20%2364A-12%2C%20Local%209%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1618262054764!5m2!1ses!2sco"
              width="100%"
              height="250"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      v-if="mostrarModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
        <h2 class="text-secondary font-mono text-1xl sm:text-3xl md:text-4xl">Política de Privacidad</h2>
        <p class="text-gray-700 text-sm overflow-y-auto max-h-64 text-justify">
          Política de Tratamiento de Datos Personales de Raza Gourmet
            Fecha de entrada en vigencia: [Fecha específica, ejemplo: 10 de enero de 2025]

            En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, Raza Gourmet adopta la presente política para garantizar la protección, privacidad y seguridad de los datos personales de los titulares de la información recolectada en el desarrollo de su actividad comercial.

            1. Identificación del Responsable del Tratamiento
            Razón Social: Raza Gourmet
            Dirección: Tv. 113f #64A-12 Local 9
            Teléfono: +57 322 4681595
            Correo Electrónico: razagourmet@gmail.com
            Página Web: wwww.razagourmet.com
            2. Finalidad del Tratamiento de los Datos Personales
            Raza Gourmet recolecta, almacena y utiliza datos personales con los siguientes propósitos:

            Contactar al titular para brindar información y asesoría personalizada sobre los productos y servicios ofrecidos.
            Realizar encuestas de satisfacción para mejorar la calidad de los productos y servicios.
            Enviar información promocional, ofertas y novedades relacionadas con los productos de comida para mascotas.
            Gestionar solicitudes de contacto y atención al cliente.
            Cumplir con obligaciones legales y contractuales derivadas de la relación comercial.
            3. Principios para el Tratamiento de Datos Personales
            Raza Gourmet aplicará los siguientes principios en el tratamiento de los datos personales:

            Legalidad: El tratamiento de datos se realizará conforme a la Ley.
            Finalidad: Los datos serán recolectados para fines legítimos y específicos.
            Libertad: Solo se tratarán datos con el consentimiento previo del titular.
            Veracidad: La información recolectada será veraz, completa y actualizada.
            Acceso y Circulación Restringida: Solo personas autorizadas tendrán acceso a los datos.
            Seguridad: Se garantizará la seguridad de los datos para evitar su adulteración, pérdida o acceso no autorizado.
            4. Derechos de los Titulares
            Como titular de los datos personales, usted tiene los siguientes derechos:

            Conocer, actualizar y rectificar sus datos personales frente a Raza Gourmet.
            Solicitar prueba de la autorización otorgada.
            Ser informado sobre el uso que se le ha dado a sus datos.
            Revocar la autorización o solicitar la supresión de sus datos cuando se haya incumplido la normativa.
            Acceder de forma gratuita a sus datos personales.
            5. Procedimiento para el Ejercicio de los Derechos
            Los titulares pueden ejercer sus derechos presentando una solicitud a través de los siguientes medios:

            Correo Electrónico: razagourmet@gmail.com
            Teléfono: +57 322 4681595
            Dirección Física: validar con Yisel
            La solicitud deberá incluir:

            Nombre completo del titular.
            Documento de identificación.
            Descripción clara de la solicitud.
            Datos de contacto.
            Raza Gourmet responderá dentro de los plazos establecidos por la normativa vigente.

            6. Seguridad de la Información
            Raza Gourmet implementa medidas técnicas, humanas y administrativas para garantizar la protección de los datos personales frente a accesos no autorizados, pérdida o manipulación.

            7. Transferencia y Transmisión Internacional de Datos
            Raza Gourmet no transferirá ni transmitirá datos personales a terceros ubicados en el exterior sin autorización previa, salvo en los casos previstos por la Ley.

            8. Vigencia de la Política
            Esta política de tratamiento de datos personales entra en vigor a partir de su fecha de publicación y estará disponible para consulta en nuestro sitio web <wwww class="razagourmet com"> </wwww>.

            9. Actualizaciones
            Raza Gourmet se reserva el derecho de modificar esta política en cualquier momento. Los cambios serán publicados en <wwww class="razagourmet com"> </wwww> con al menos 10 días hábiles de antelación a su implementación.

            Si tienes preguntas sobre esta política o necesitas más información, contáctanos a través de los canales dispuestos en esta política.

            Raza Gourmet
            Comprometidos con la protección de tu privacidad
        </p>
        <div class="mt-4 flex justify-end">
          <button @click="cerrarModal" class="px-4 py-2 bg-orange-900 text-white rounded-md hover:bg-orange-600">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./encuentranosPage.js"/>
