<script setup lang="ts">
import { ConfigData } from '../type';

type Props = {
  showData: any
  formData: Record<string, any>
  configData: ConfigData
}

const props = withDefaults(defineProps<Props>(), {
  showData: false,
  formData: () => ({}),
  configData: undefined,
})

const btnFunc = (func: any) => {
  if (func instanceof Function) {
    func();
  } else {
    // eval(func)();
    (new Function('return' + func))()();
  }
}

</script>

<template>
  <div class="w-1/2 option_con my-5 border-2 py-2 rounded">
    <el-form :inline="true" :model="props?.formData">
      <!-- 输入框列表 -->
      <div class="option_con_flex">
        <el-form-item label-width="100px" v-for="item in props?.configData?.inputList" :label="item.label" style="flex: 1">
            <el-input
              v-model="props.formData[item.value]"
              v-if="item.ele === 'Input'"
              :placeholder="item.placeholder || `请输入${item.label}`"
              clearable
              style="width: 100%"
            />
            <el-select
              v-model="props.formData[item.value]"
              v-else-if="item.ele === 'Select'"
              :placeholder="item.placeholder || `请选择${item.label}`"
              :teleported="false"
              style="width: 100%"
            >
              <el-option
                v-for="itemN in item.options"
                :key="itemN.value"
                :label="itemN.label"
                :value="itemN.value"
              />
            </el-select>
            <div v-else>该元素无法渲染</div>
        </el-form-item>
      </div>
        <el-row justify="end">
            <el-form-item v-for="btn in props?.configData?.btnList">
                <el-button type="primary" @click="() => btnFunc(btn?.callBack)">{{ btn.text }}</el-button>
            </el-form-item>
        </el-row>
    </el-form>
    <div v-if="props.showData">{{ props.formData }}</div>
  </div>
</template>

<style scoped>
/* .option_con :deep(.el-select__popper) {
  inset: 0;
  display: block;
} */
.option_con_flex {
  display: flex;
}

</style>
