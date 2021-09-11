import Vue from 'vue';
import Vuex from 'vuex';

import { actions, mutations } from './methods';

import { api } from '@/api/products';
import { ProductModel } from '@/models/ProductModel';

Vue.use(Vuex);

const products: ProductModel[] = [];
const cart: ProductModel[] = [];
const wishlist: ProductModel[] = [];

export default new Vuex.Store({
  state: {
    products,
    cart,
    wishlist,
    count: 0,
  },
  mutations: {
    [mutations.SET_PRODUCTS]: (state, data: ProductModel[]) => {
      state.products = data;
    },
    [mutations.ADD_TO_CART]: (state, data: ProductModel) => {
      state.cart.push(data);
    },
    [mutations.ADD_TO_WISHLIST]: (state, data: ProductModel) => {
      state.wishlist.push(data);
    },
  },
  actions: {
    [actions.GET_PRODUCTS]: async ({ commit }, { limit, offset }) => {
      const response = await api.getProducts(limit, offset);
      commit(mutations.SET_PRODUCTS, response.data);
    },
  },
});
