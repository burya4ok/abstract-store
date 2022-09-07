import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'react-obsidian/dist/transformers/babel-plugin-obsidian',
          ['@babel/plugin-proposal-decorators', {legacy: true}],
          ['@babel/plugin-proposal-class-properties', {legacy: true}],
          'babel-plugin-parameter-decorator',
        ],
      },
    }),
  ],
});
