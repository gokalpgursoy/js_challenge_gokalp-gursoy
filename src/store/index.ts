import Vue from 'vue';
import Vuex from 'vuex';

import { actions, mutations } from './methods';

import { api } from '@/api/products';
import { ProductModel } from '@/models/ProductModel';

Vue.use(Vuex);

const products: ProductModel[] = [];

export default new Vuex.Store({
  state: {
    products,
    count: 0,
  },
  mutations: {
    [mutations.SET_PRODUCTS]: (state, data: ProductModel[]) => {
      state.products = data;
    },
  },
  actions: {
    [actions.GET_PRODUCTS]: async ({ commit }, { limit, offset }) => {
      const response = await api.getProducts(limit, offset);
      commit(mutations.SET_PRODUCTS, response.data);
    },
  },
});
