import { reactive, ref, watchEffect } from "vue";
import { TypeEle, ConfigData } from '../type';

export const useData = () => {
  const showData = ref<boolean>(false);
  window.showData = showData;

  const configData = reactive<ConfigData>({
    inputList: [
      {
          label: '值1',
          ele: TypeEle.Input,
          value: 'valueA',
          placeholder: '请输入值A'
      },
      {
          label: '值2',
          ele: TypeEle.Select,
          value: 'valueB',
          options: [
              {
                  value: 'a',
                  label: 'A',
              },
              {
                  value: 'b',
                  label: 'B',
              }
          ],
          placeholder: '请输入值2'
      },
    ],
    btnList: [
        {
            text: '取消',
            callBack: () => {
              showData.value = true;
            },
        },
        {
            text: '确认',
            callBack: () => {
              showData.value = true;
            },   
        },
    ],
  });
  
  const initData: Record<string, any> = {};
  _.forEach(configData?.inputList ?? [], item => {
    initData[item.value] = '';
  });
  
  const formData = reactive<Record<string, any>>(initData);

  watchEffect(() => {
    if (showData.value) {
      setTimeout(() => {
        showData.value = false;
      }, 3000)
    }
  });
  return {
    showData,
    configData,
    formData,
  }

}