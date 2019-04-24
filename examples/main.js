import Vue from 'vue'
import App from './App.vue'

import { Circle, Close } from '../src/index';

Vue.use(Circle);
Vue.use(Close);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
