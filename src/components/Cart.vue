<template>
  <div class="cart-wrapper">
    <BaseIcon
      icon-name="bag"
      :show-text="cart.length > 0"
      :text="sumCartPrice"
      :counter="cart.length"
      clickable
      @handleClick="handleClickIcon"
    />
    <ProductPopover v-if="isShowCartPopover" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { ProductModel } from '@/models/ProductModel';

import ProductPopover from '@/components/ProductPopover.vue';
import { mutations } from '@/store/methods';

export default Vue.extend({
  name: 'Cart',
  components: { ProductPopover },
  computed: {
    ...mapState(['cart', 'isShowCartPopover']),
    sumCartPrice() {
      const sum: number = this.cart
        .map((item: ProductModel) => {
          if (item.discount) {
            return item.retail_price.value;
          }
          return item.original_retail_price.value;
        })
        .reduce((acc: number, itemPrice: number) => acc + itemPrice, 0);

      let currencyPrefix = '';
      if (this.cart.length) {
        [currencyPrefix] = this.cart[0].retail_price.formatted_value.split(' ');
      }
      return `${currencyPrefix}${sum}`;
    },
  },
  methods: {
    handleClickIcon() {
      this.$store.commit(mutations.SET_IS_SHOW_WISHLIST_POPOVER, false);
      this.$store.commit(mutations.SET_IS_SHOW_CART_POPOVER, !this.isShowCartPopover);
    },
  },
});
</script>

<style lang="scss" scoped>
.cart-wrapper {
  position: relative;
}
</style>
