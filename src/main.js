import Vue from 'vue';
import router from '@/router';
import App from '@/views/App.vue';
import plugins from '@/plugins.js';


Vue.config.productionTip = false
Vue.use(plugins);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
