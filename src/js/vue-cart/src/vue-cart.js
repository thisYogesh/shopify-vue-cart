import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'

Vue.use(Vuex)

Vue.filter('toUSD', (amount) => {
    if(amount) {
        let string = amount.toString();
        const dollars = string.slice(0, -2);
        const cents = string.slice(-2);
        return(`$${dollars}.${cents}`)
    }
});

Vue.mixin({
    data() {
        return {
        }
    }
})

new Vue({
    name: 'VueCart',
    store,
    el: '#vueCart',
    components: { App },
    template: '<App/>'
})