<template>
  <header class="header">
    <Container class="header-container">
      <h1 class="header-container__title">BRAND</h1>
      <aside class="header-container__bag">
        <BaseIcon
          icon-name="bag"
          :show-text="cart.length > 0"
          :text="sumCartPrice"
          :counter="cart.length"
        />
        <BaseIcon icon-name="wishlist" :counter="wishlist.length" />
      </aside>
    </Container>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import Container from '@/components/Container.vue';
import { ProductModel } from '@/models/ProductModel';

export default Vue.extend({
  name: 'Header',
  components: { Container },
  computed: {
    ...mapState(['cart', 'wishlist']),
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

<style lang="scss" scoped>
.header {
  background: $white;
  height: 60px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__title {
      font-size: 20px;
    }
    &__bag {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 10px;
    }
  }
}
</style>
