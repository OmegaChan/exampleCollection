<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { reactive } from 'vue';

console.log('环境变量', import.meta.env);
const urlObj = reactive({
  urlReact: `http://localhost:${import.meta.env.VITE_react_demo}/`,
  urlVue: `http://localhost:${import.meta.env.VITE_vue_demo}/`,
});


</script>

<template>
  <div>主应用 start</div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>主应用 end</div>
  <div>
    子应用
  </div>
  <WujieVue name="react" :url="urlObj.urlReact"></WujieVue>
  <WujieVue name="vue" :url="urlObj.urlVue"></WujieVue>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
