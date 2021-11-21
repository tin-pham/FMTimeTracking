import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

import '@/assets/global-scss/index.scss';

createApp(App).use(store).mount('#app');
