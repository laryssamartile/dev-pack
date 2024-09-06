import { createApp } from "vue";
import Particles from "vue3-particles";
import App from "./App.vue";
import router from './router';

const app = createApp(App)
app.use(router)
app.use(Particles)
app.mount("#app");
