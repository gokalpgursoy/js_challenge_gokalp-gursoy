import Vue from 'vue';

import App from '@/App.vue';
import store from '@/store';

import '@/styles/main.scss';

import BaseIcon from '@/components/Base/BaseIcon.vue';

Vue.component('BaseIcon', BaseIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
