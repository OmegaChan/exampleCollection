import { reactive, ref } from 'vue';
import { appConfig } from '../config';
import { UrlObj } from './type';

export const useChangeUrl = () => {
  const activeKey = ref<string>('react');

  const setActiveKet = (val: string) => {
    activeKey.value = val;
  };

  const urlObj = reactive<UrlObj>({
    urlReact: `http://localhost:${import.meta.env.VITE_react_demo}/rowControl`,
    urlVue: `http://localhost:${import.meta.env.VITE_vue_demo}/`,
  });

  const setUrlObj = (url: string) => {
    // 子应用类型
    const urlType = url.split('-')[0];
    if (urlType === 'react') {
      console.log('切换react', url);
      setActiveKet('react');
      urlObj.urlReact = `http://localhost:${import.meta.env.VITE_react_demo}/${appConfig?.get(url)}`;
    } else {
      console.log('切换vue', url);
      setActiveKet('vue');
      urlObj.urlVue = `http://localhost:${import.meta.env.VITE_vue_demo}/${appConfig?.get(url)}`;
    };
  };

  return {
    activeKey,
    urlObj,
    setActiveKet,
    setUrlObj
  }
}