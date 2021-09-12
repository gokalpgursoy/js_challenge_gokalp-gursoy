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
    totalProductCount: 0,
    currentPage: 1,
    limit: 6,
    isLoading: false,
  },
  mutations: {
    [mutations.SET_PRODUCTS]: (state, data: ProductModel[]) => {
      state.products = data;
    },
    [mutations.SET_TOTAL_PRODUCT_COUNT]: (state, count: number) => {
      state.totalProductCount = count;
    },
    [mutations.ADD_TO_CART]: (state, data: ProductModel) => {
      state.cart.push(data);
    },
    [mutations.ADD_TO_WISHLIST]: (state, data: ProductModel) => {
      state.wishlist.push(data);
    },
    [mutations.REMOVE_FROM_CART]: (state, productId: string) => {
      const index = state.cart.findIndex((item: ProductModel) => item.uuid === productId);
      if (index > -1) {
        state.cart.splice(index, 1);
      }
    },
    [mutations.REMOVE_FROM_WISHLIST]: (state, productId: string) => {
      const index = state.wishlist.findIndex((item: ProductModel) => item.uuid === productId);
      if (index > -1) {
        state.wishlist.splice(index, 1);
      }
    },
    [mutations.SET_CURRENT_PAGE]: (state, page) => {
      state.currentPage = page;
    },
    [mutations.SET_IS_LOADING]: (state, isLoading: boolean) => {
      state.isLoading = isLoading;
    },
  },
  actions: {
    [actions.GET_PRODUCTS]: async ({ state, commit }) => {
      commit(mutations.SET_IS_LOADING, true);
      const offset = (state.currentPage - 1) * state.limit;
      const response = await api.getProducts(state.limit, offset);
      commit(mutations.SET_PRODUCTS, response.data);
      commit(mutations.SET_TOTAL_PRODUCT_COUNT, response.meta.count);
      commit(mutations.SET_IS_LOADING, false);
    },
    [actions.UPDATE_PAGE_AND_GET_PRODUCTS]: async ({ dispatch, commit }, pageNumber) => {
      commit(mutations.SET_CURRENT_PAGE, pageNumber);
      dispatch(actions.GET_PRODUCTS);
    },
  },
});
