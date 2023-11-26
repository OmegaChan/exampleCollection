<script setup lang="ts">
import { ref, onMounted, toRaw } from 'vue';
import { ConfigData } from '../type';

type Props = {
  configData: ConfigData
  str2obj: (str: string) => Record<string, any>
  obj2str: (obj: Record<string, any>) => string
}

const props = withDefaults(defineProps<Props>(), {
  configData: undefined,
  str2obj: () => ({}),
  obj2str: () => '',
})
const textarea = ref('');

onMounted(() => {
  // 初始化用例
  textarea.value = props.obj2str(toRaw(props.configData));
})

const isJson = (str: string) => {
  try {
      if (typeof JSON.parse(str) == "object") {
          return true;
      }
  } catch(e) {
  }
  return false;
}
const initForm = () => {
  if (isJson(textarea.value)) {
    const jsonObj = props.str2obj(textarea.value);
    props.configData.inputList = jsonObj.inputList;
    props.configData.btnList = jsonObj.btnList;
  } else {
    ElMessage.error('请输入正确的JSON格式');
  }
}
</script>

<template>
  <div class="flex w-1/2 items-end">
    <el-input
    v-model="textarea"
    :autosize="{ minRows: 5 }"
    type="textarea"
    placeholder="Please input"
  />
    <div class="ml-2 items-end">
      <el-button type="success" plain @click="initForm">生成表单</el-button>
    </div>
  </div>
</template>

<style scoped>
</style>
