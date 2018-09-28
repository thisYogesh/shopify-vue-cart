import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shoppingCart: {}
    },
    getters: {
        shoppingCart: state => {
            return state.shoppingCart
        }
    },
    mutations: {
        initCart(state, payload) {
            return state.shoppingCart = payload;
        }

    },
    actions: {
        initCart: ({ commit }) => {
            axios.get('/cart.js')
                .then((response) => {
                    commit('initCart', response.data)
                })
                .catch(function (error) {
                    console.log(error);
                  });
        }
    }
})