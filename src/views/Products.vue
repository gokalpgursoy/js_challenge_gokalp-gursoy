<template>
  <ul class="product-list">
    <li class="product-list__item">
      <ProductCard />
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue';
import ProductCard from '@/components/ProductCard.vue';

export default Vue.extend({
  components: { ProductCard },
  name: 'Products',
});
</script>

<style lang="scss" scoped>
ul {
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
}
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
