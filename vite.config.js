import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/pdfs": {
        target: "https://apecoin.io/assets/docs",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/pdfs/, ""),
      },
      "/alipdfs": {
        target: "https://yh-sign.oss-cn-shenzhen.aliyuncs.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/alipdfs/, ""),
      },
    }
  },
  plugins: [vue()]
})
