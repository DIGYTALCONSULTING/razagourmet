<template>
  <div class="fixed bottom-4 right-4 z-50">
    <!-- Botón para abrir/cerrar el chat -->
    <button
      @click="toggleChat"
      class="chat-toggle-button bg-orange-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none"
    >
      <font-awesome-icon :icon="['fab-solid', 'fa-paw']" class="mr-2" />
      Chat
    </button>

    <!-- Caja de chat -->
    <div
      v-if="isOpen"
      class="chatbox mt-2 w-80 h-96 bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col"
    >
      <!-- Encabezado del chat -->
      <div class="bg-orange-500 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 class="font-semibold">Asistente Virtual</h3>
        <button @click="toggleChat" class="text-white">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>

      <!-- Mensajes -->
      <div class="messages flex-1 p-4 overflow-y-auto">
        <div v-for="(message, index) in messages" :key="index" class="mb-4">
          <p
            :class="message.sender === 'user' ? 'message-user' : 'message-bot'"
            class="p-2 rounded-lg inline-block max-w-xs"
          >
            {{ message.text }}
          </p>
        </div>
        <div v-if="loading" class="text-center text-gray-500">Escribiendo...</div>
      </div>

      <!-- Preguntas rápidas -->
      <div v-if="mostrarPreguntasRapidas" class="p-4 border-t border-gray-300">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(pregunta, index) in preguntasRapidas"
            :key="index"
            @click="enviarPreguntaRapida(pregunta)"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            {{ pregunta }}
          </button>
        </div>
      </div>

      <!-- Input de texto -->
      <div class="p-4 border-t border-gray-300 flex items-center space-x-2">
        <input
          v-model="userInput"
          type="text"
          placeholder="Escribe un mensaje..."
          class="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          @keyup.enter="sendMessage"
        />
        <button
          @click="sendMessage"
          class="bg-orange-900 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>
<script src="./ChatBox.js"></script>
<style src="./ChatBox.css"></style>
