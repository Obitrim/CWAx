import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import App from '@/views/App.vue';
import plugins from '@/plugins.js';

Vue.config.productionTip = false
Vue.use(plugins);

// firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '@/services/firebase-config.js';

// firebase setup
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
