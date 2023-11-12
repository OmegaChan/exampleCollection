import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'



// https://vitejs.dev/config/
export default ({ mode }) => {
  const env=loadEnv(mode, path.resolve(__dirname, '../..'));   // 获取.env文件里定义的环境变量
  
  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(env.VITE_react_demo)
    },
  })
}
