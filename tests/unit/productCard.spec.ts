import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import ProductCard from '@/components/ProductCard.vue';
import { ProductModel } from '@/models/ProductModel';
import BaseIcon from '@/components/Base/BaseIcon.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.component('BaseIcon', BaseIcon);

const store = new Vuex.Store({
  state: {
    cart: [],
    wishlist: [],
    isLoading: false,
  },
});

const product: ProductModel = {
  cover_image_url:
    'https://images.musement.com/cover/0148/54/thumb_14753875_cover_header.jpeg?w=540',
  description:
    'Book your grape stomping experience at Les Pastras and live an authentic French experience, full of laughter and fun for all ages',
  discount: 10,
  title: 'GRAPE STOMPING EXPERIENCE AT LES PASTRAS',
  uuid: '1',
  retail_price: {
    currency: 'USD',
    formatted_iso_value: '$43.00',
    formatted_value: '$ 43.00',
    value: 43,
  },
  original_retail_price: {
    currency: 'USD',
    formatted_iso_value: '$53.00',
    formatted_value: '$ 53.00',
    value: 53,
  },
};

describe('ProductCard', () => {
  const wrapper = mount(ProductCard, {
    store,
    localVue,
    propsData: {
      product,
    },
  });
  it('should be render product title by prop', () => {
    expect(wrapper.find('.product__details--title').text()).toBe(product.title);
  });
  it('should be render subtitle by prop', () => {
    expect(wrapper.find('.product__details--subtitle').text()).toBe(
      product.description,
    );
  });
  if (product.discount) {
    it('should be render original price by prop', () => {
      expect(wrapper.find('.product__details--price--strike').text()).toBe(
        product.original_retail_price.formatted_iso_value,
      );
    });
    it('should be render discounted price by prop if discount exist', () => {
      expect(wrapper.find('.product__details--price--discounted').text()).toBe(
        product.retail_price.formatted_iso_value,
      );
    });
  } else {
    it('should be render original price by prop', () => {
      expect(wrapper.find('.product__details--price').text()).toBe(
        product.original_retail_price.formatted_iso_value,
      );
    });
  }
});
