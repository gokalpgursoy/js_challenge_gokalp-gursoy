<template>
  <div class="wishlist-wrapper">
    <BaseIcon
      icon-name="wishlist"
      :counter="wishlist.length"
      clickable
      @handleClick="handleClickIcon"
    />
    <ProductPopover v-if="isShowWishlistPopover" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { mutations } from '@/store/methods';

import ProductPopover from '@/components/ProductPopover.vue';

export default Vue.extend({
  name: 'Cart',
  components: { ProductPopover },
  computed: {
    ...mapState(['wishlist', 'isShowWishlistPopover']),
  },
  methods: {
    handleClickIcon() {
      this.$store.commit(mutations.SET_IS_SHOW_CART_POPOVER, false);
      this.$store.commit(mutations.SET_IS_SHOW_WISHLIST_POPOVER, !this.isShowWishlistPopover);
    },
  },
});
</script>

<style lang="scss" scoped>
.wishlist-wrapper {
  position: relative;
}
</style>
