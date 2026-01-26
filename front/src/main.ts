import App from './App.vue';
import './assets/base.css';
import { createApp } from 'vue';
import {
    createRouter, createWebHistory
} from 'vue-router';
import { routes } from 'vue-router/auto-routes';

const router = createRouter({
    history: createWebHistory(),
    routes
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App);
app.use(router);
app.mount('#app');
