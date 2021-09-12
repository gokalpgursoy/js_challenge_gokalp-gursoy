<template>
  <div class="popover" :class="isShowCartPopover ? 'popover__cart' : 'popover__wishlist'">
    <div
      class="popover__card__wrapper"
      :class="
        isShowCartPopover ? 'popover__card__wrapper__cart' : 'popover__card__wrapper__wishlist'
      "
    >
      <div v-for="(item, i) in list" class="popover__card" :key="i">
        <img
          class="popover__card--image"
          src="../assets/images/activity_image.jpeg"
          :alt="item.title"
          width="80"
          height="80"
        />
        <div class="popover__card--content">
          <p class="popover__card--content__title">{{ item.title }}</p>
          <p v-if="item.discount" class="popover__card--content__price">
            1 X {{ item.retail_price.formatted_iso_value }}
          </p>
          <p v-else class="popover__card--content__price">
            1 X {{ item.original_retail_price.formatted_iso_value }}
          </p>
        </div>
        <div class="popover__card--button-wrapper">
          <button
            @click="handleRemoveItem(item)"
            class="popover__card--button-wrapper__remove-button"
          >
            X
          </button>
        </div>
      </div>
    </div>
    <div v-if="isShowCartPopover" class="popover__subtotal">
      <div class="popover__subtotal--text">CARD SUB TOTAL:</div>
      <div class="popover__subtotal--text">{{ sumCartPrice }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { ProductModel } from '@/models/ProductModel';
import { mutations } from '@/store/methods';

export default Vue.extend({
  name: 'ProductPopover',
  computed: {
    ...mapState(['cart', 'wishlist', 'isShowCartPopover', 'isShowWishlistPopover']),
    ...mapGetters(['sumCartPrice']),
    list() {
      if (this.isShowCartPopover) {
        return this.cart;
      }
      if (this.isShowWishlistPopover) {
        return this.wishlist;
      }
      return [];
    },
  },
  methods: {
    handleRemoveItem(item: ProductModel) {
      const productId = item.uuid;
      if (this.isShowCartPopover) {
        this.$store.commit(mutations.REMOVE_FROM_CART, productId);
        if (!this.cart.length) {
          this.$store.commit(mutations.SET_IS_SHOW_CART_POPOVER, false);
        }
      } else {
        this.$store.commit(mutations.REMOVE_FROM_WISHLIST, productId);
        if (!this.wishlist.length) {
          this.$store.commit(mutations.SET_IS_SHOW_WISHLIST_POPOVER, false);
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.popover {
  width: 300px;
  overflow: hidden;
  background-color: $white;
  color: $primary;
  border: 2px solid $primary;
  border-radius: 5px;
  position: absolute;
  top: 25px;
  left: -250px;
  z-index: 1;
  &__cart {
    height: 350px;
  }
  &__wishlist {
    height: 300px;
  }
  &__card__wrapper {
    overflow: auto;
    &__cart {
      height: 300px;
    }
    &__wishlist {
      height: 350px;
    }
  }
  &__card {
    height: 100px;
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    border-bottom: 2px solid $primary;
    &--content {
      &__price {
        margin-top: 10px;
      }
    }
    &--button-wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      &__remove-button {
        background-color: $white;
        color: $primary;
        border: 2px solid $primary;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  &__subtotal {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    padding: 8px;
    &--text {
      color: $primary;
    }
  }
}
</style>
