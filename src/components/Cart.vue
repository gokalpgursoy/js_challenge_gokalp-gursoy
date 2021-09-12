<template>
  <div>
    <BaseIcon
      icon-name="bag"
      :show-text="cart.length > 0"
      :text="sumCartPrice"
      :counter="cart.length"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { ProductModel } from '@/models/ProductModel';

export default Vue.extend({
  name: 'Cart',
  computed: {
    ...mapState(['cart']),
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
});
</script>

<style lang="scss" scoped></style>
