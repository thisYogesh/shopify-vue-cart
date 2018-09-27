import Vue from 'vue'
import App from './App.vue'

Vue.mixin({
    data() {
        return {
        }
    },
    computed: {

    }
})

new Vue({
    name: 'VueCart',
    el: '#vueCart',
    components: { App },
    template: '<App/>'
})