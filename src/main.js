import Vue from 'vue';
import App from './App.vue';
import PageNotFound from './components/PageNotFound.vue';
import Vuelidate from 'vuelidate';
import VueTypedJs from 'vue-typed-js';

Vue.config.productionTip = false;

Vue.use(VueTypedJs);
Vue.use(Vuelidate);

const routes = {
    '/': App,
    '/404': PageNotFound
};

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        viewComponent() {
            return routes[this.currentRoute] || PageNotFound;
        }
    },
    render(h) {
        return h(this.viewComponent);
    }
});
