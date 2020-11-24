import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import VueTypedJs from 'vue-typed-js';

Vue.config.productionTip = false;

Vue.use(VueTypedJs);
Vue.use(Vuelidate);

new Vue({
    render: h => h(App)
}).$mount('#app');
