<script setup lang="ts">
import { watchEffect } from 'vue';
import AsideMenu from './components/AsideMenu.vue';
import { useChangeUrl } from './hooks/useChangeUrl';

const { activeKey, urlObj, setUrlObj } = useChangeUrl();
watchEffect(() => {
  console.log({ urlObj: urlObj.urlReact });
})

</script>

<template>
  <h1 class="text-3xl font-bold my-5 ml-2">
    Monorepo架构-微前端
  </h1>
  <el-tag class="ml-2" type="success">主应用(基于vue3 + vite)</el-tag>
  <el-container>
    <el-aside width="200px">
      <AsideMenu :setUrlObj="setUrlObj" />
    </el-aside>
    <el-main>
      <WujieVue name="react" :url="urlObj.urlReact" v-if="activeKey==='react'"></WujieVue>
      <WujieVue name="vue" :url="urlObj.urlVue" v-else></WujieVue>
    </el-main>
  </el-container>
</template>

<style scoped>
</style>
