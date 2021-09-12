const mutations = {
  SET_PRODUCTS: 'products/SET_PRODUCTS',
  SET_TOTAL_PRODUCT_COUNT: 'products/SET_TOTAL_PRODUCT_COUNT',
  ADD_TO_CART: 'products/ADD_TO_CART',
  ADD_TO_WISHLIST: 'products/ADD_TO_WISHLIST',
  REMOVE_FROM_CART: 'products/REMOVE_FROM_CART',
  REMOVE_FROM_WISHLIST: 'products/REMOVE_FROM_WISHLIST',
  SET_CURRENT_PAGE: 'products/SET_CURRENT_PAGE',
};

const actions = {
  GET_PRODUCTS: 'products/GET_PRODUCTS',
  UPDATE_PAGE_AND_GET_PRODUCTS: 'products/UPDATE_PAGE_AND_GET_PRODUCTS',
};

export { actions, mutations };
