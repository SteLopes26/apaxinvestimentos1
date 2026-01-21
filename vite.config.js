import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                cenario: resolve(__dirname, 'cenario.html'),
                contato: resolve(__dirname, 'contato.html'),
                news: resolve(__dirname, 'news.html'),
                sobre: resolve(__dirname, 'sobre.html'),
                artigo_alimentar: resolve(__dirname, 'artigo-alimentar-vs-comum.html'),
                artigo_pec: resolve(__dirname, 'artigo-pec-66-2023.html'),
                artigo_pos_venda: resolve(__dirname, 'artigo-pos-venda.html'),
            },
        },
    },
});
