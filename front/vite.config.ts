import { cloudflare } from '@cloudflare/vite-plugin';
import vue from '@vitejs/plugin-vue';
import unpluginVueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        cloudflare(),
        tsconfigPaths(),
        unpluginVueRouter(),
        vue(),
        vueDevTools()
    ]
});
