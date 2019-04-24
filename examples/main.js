import Vue from 'vue'
import App from './App.vue'

import { Circle } from '../src/index';

Vue.use(Circle);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
