import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'), // Specify the path to your Tailwind CSS configuration file
  ],
});
