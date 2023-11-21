<script setup lang="ts">
import ConfigInput from './components/ConfigInput.vue';
import ConfigTip from './components/ConfigTip.vue';
import ConfigFormCom from './components/ConfigFormCom.vue';
import { useData } from './hooks/useData';
import { useStrAndObj } from '../../hooks/useStrAndObj';

const { showData, configData, formData } = useData();
const { str2obj, obj2str } = useStrAndObj();
</script>

<template>
  <div class="ml-2">
    <ConfigInput
      :configData="configData"
      :str2obj="str2obj"
      :obj2str="obj2str"
    />
    <ConfigFormCom
      :showData="showData"
      :configData="configData"
      :formData="formData"
    />
    <ConfigTip />
  </div>
</template>

<style scoped>
</style>
