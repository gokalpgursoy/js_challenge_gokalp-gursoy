<template>
  <div>
    <ul class="product-list">
      <li class="product-list__item" v-for="(item, i) in products" :key="i">
        <ProductCard :product="item" />
      </li>
    </ul>
    <Pagination />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import ProductCard from '@/components/ProductCard.vue';
import Pagination from '@/components/Pagination.vue';

import { actions } from '@/store/methods';

export default Vue.extend({
  components: { ProductCard, Pagination },
  name: 'Products',
  computed: {
    ...mapState(['products']),
  },
  beforeMount() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$store.dispatch(actions.GET_PRODUCTS, { limit: 6, offset: 0 });
    },
  },
});
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex: 0 1 auto;
  flex-flow: row wrap;
  margin: 0 -10px;
  &__item {
    padding: 10px;
    flex: 1 0 33.3333%;
    max-width: 33.3333%;
    @media (max-width: 1024px) {
      flex: 1 0 50%;
      max-width: 50%;
    }
    @media (max-width: 769px) {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
}
</style>
