import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import piniaPersistedState from 'pinia-plugin-persistedstate';
import BootstrapVue3 from 'bootstrap-vue-3';


const app = createApp(App);

app.use(createPinia());
app.use(router);

const pinia = createPinia();

pinia.use(piniaPersistedState);
app.use(pinia);

app.use(BootstrapVue3); 
app.mount('#app');
