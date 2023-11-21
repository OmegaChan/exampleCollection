import { createApp } from 'vue'
import router from './router';
import _ from 'lodash';
import './style.css'
import App from './App.vue'
window._ = _;

createApp(App).use(router).mount('#app')
