import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  base:"https://thecoderbutcher.github.io/eatcommerce/",
  build:{
    outDir: 'docs'
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
