<template>
  <div class="cart-wrapper">
    <BaseIcon
      icon-name="bag"
      :show-text="cart.length > 0"
      :text="sumCartPrice"
      :counter="cart.length"
      :clickable="cart.length > 0"
      @handleClick="handleClickIcon"
    />
    <ProductPopover v-if="isShowCartPopover" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';

import ProductPopover from '@/components/ProductPopover.vue';
import { mutations } from '@/store/methods';

export default Vue.extend({
  name: 'Cart',
  components: { ProductPopover },
  computed: {
    ...mapState(['cart', 'isShowCartPopover']),
    ...mapGetters(['sumCartPrice']),
  },
  methods: {
    handleClickIcon() {
      this.$store.commit(mutations.SET_IS_SHOW_WISHLIST_POPOVER, false);
      this.$store.commit(
        mutations.SET_IS_SHOW_CART_POPOVER,
        !this.isShowCartPopover,
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.cart-wrapper {
  position: relative;
}
</style>
