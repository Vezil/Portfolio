import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTypedJs from 'vue-typed-js';

Vue.config.productionTip = false;

Vue.use(VueTypedJs);

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');
