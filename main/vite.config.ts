import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 在vite.config.ts中读取顶层环境变量
  const env=loadEnv(mode, path.resolve(__dirname, '..'));   // 获取.env文件里定义的环境变量
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    server: {
      port: Number(env.VITE_main)
    },
    envDir: '..', // 将主应用的env环境提升至根目录中，方便与子应用共享环境变量
  })
}
