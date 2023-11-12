import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default ({ mode }) => {
  const env=loadEnv(mode, path.resolve(__dirname, '../..'));   // 获取.env文件里定义的环境变量
  
  return defineConfig({
    plugins: [vue()],
    server: {
      port: Number(env.VITE_vue_demo)
    },
  })
}
