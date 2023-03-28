import { createStore } from 'vuex';

import ProductsModule from './modules/product.js';
import CartModule from './modules/cart.js';

const store =  createStore({
    modules: {
        prods: ProductsModule,
        cart: CartModule
    },
    state(){
        return {
            isLoggedIn: false
        };
    },
    mutations: {
         
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        login(context){
            context.commit('login');
        },
        logout(context){
            context.commit('logout');
        },
    },
    getters: {
        isAuthenticated(state){
            return state.isLoggedIn;
        }
    }
});

export default store;