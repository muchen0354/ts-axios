// vite.config.js
import { resolve } from "path"

export default {
  // 配置选项
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './examples/index.html'),
        simple: resolve(__dirname, './examples/simple/index.html')
      }
    }
  }
}
