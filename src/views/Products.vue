<template>
  <div>
    <ul class="product-list">
      <li class="product-list__item">
        <ProductCard />
      </li>
    </ul>
    <Pagination />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ProductCard from '@/components/ProductCard.vue';
import Pagination from '@/components/Pagination.vue';

export default Vue.extend({
  components: { ProductCard, Pagination },
  name: 'Products',
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
  }
}
</style>
