<script setup lang="ts">
type Props = {
  setUrlObj: (url: string) => void,
}

const props = withDefaults(defineProps<Props>(), {
  setUrlObj: () => {},
})

const handleMenuSelect = (key: string) => {
    props.setUrlObj(key);
}
</script>

<template>
  <el-menu
    default-active="react"
    class="el-menu-vertical-demo"
    @select="handleMenuSelect"
  >
    <el-sub-menu index="react">
      <template #title>
        <el-icon><location /></el-icon>
        <span>React子应用</span>
      </template>
      <el-menu-item index="react-01">表格分行</el-menu-item>
      <el-menu-item index="react-02">item two</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="vue">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Vue子应用</span>
      </template>
      <el-menu-item index="vue-01">item one</el-menu-item>
      <el-menu-item index="vue-02">item two</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
</style>
