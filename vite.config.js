import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            formats: ['es', 'cjs'],
            fileName: (format) => `vue-theme.${format}.js`
        },
        rollupOptions: {
            external: ['vue'], // Don't bundle vue into the library, it's an external dependency
            output: {
                preserveModules: true,  // Preserve model structure to support treeshaking
                exports: 'named'
            }
        }
    }
});
