// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

// Importaciones de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faUser  } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Agrega los íconos a la biblioteca de Font Awesome
library.add(faCoffee, faUser, faInstagram, faFacebook, faWhatsapp );

// Crea la aplicación de Vue
const app = createApp(App);

// Registra el componente Font Awesome globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Monta la aplicación
app.mount('#app');
