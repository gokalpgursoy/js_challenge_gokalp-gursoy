<template>
  <article class="product">
    <figure class="product__image-wrapper">
      <img class="product__image" src="../assets/images/activity_image.jpeg" alt="PRODUCT_TITLE" />
      <button
        class="product__wishlist-button button button--round"
        :class="isProductExistInWishlist && 'product__wishlist-button--exist'"
        @click="handleToggleWishlist"
      >
        <BaseIcon icon-name="wishlist" />
      </button>
    </figure>
    <div class="product__details">
      <h2 class="product__details--title">{{ product.title }}</h2>
      <p class="product__details--subtitle">{{ product.description }}</p>
      <div class="product__details--price">
        <span v-if="product.discount" class="product__details--price--strike">
          {{ product.original_retail_price.formatted_iso_value }}
        </span>
        <span v-else class="product__details--price">
          {{ product.original_retail_price.formatted_iso_value }}
        </span>
        <span v-if="product.discount" class="product__details--price--discounted">
          {{ product.retail_price.formatted_iso_value }}
        </span>
      </div>
      <button
        class="button button--primary"
        :class="
          isProductExistInCart
            ? 'product__details--in-cart-button'
            : 'product__details--add-to-cart-button'
        "
        @click="handleToggleCart"
      >
        {{ isProductExistInCart ? 'REMOVE FROM CART' : 'ADD TO CART' }}
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { mapState } from 'vuex';

import { ProductModel } from '@/models/ProductModel';

import { mutations } from '@/store/methods';

export default Vue.extend({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<ProductModel>,
      required: true,
    },
  },
  computed: {
    ...mapState(['cart', 'wishlist']),
    isProductExistInCart() {
      return this.cart.some((item: ProductModel) => item.uuid === this.product.uuid);
    },
    isProductExistInWishlist() {
      return this.wishlist.some((item: ProductModel) => item.uuid === this.product.uuid);
    },
  },
  methods: {
    handleToggleCart() {
      if (this.isProductExistInCart) {
        this.$store.commit(mutations.REMOVE_FROM_CART, this.product.uuid);
      } else {
        this.$store.commit(mutations.ADD_TO_CART, this.product);
      }
    },
    handleToggleWishlist() {
      if (this.isProductExistInWishlist) {
        this.$store.commit(mutations.REMOVE_FROM_WISHLIST, this.product.uuid);
      } else {
        this.$store.commit(mutations.ADD_TO_WISHLIST, this.product);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $white;
  &__image-wrapper {
    padding: 20px;
    position: relative;
    text-align: center;
  }
  &__image {
    max-width: 100%;
    height: auto;
  }
  &__wishlist-button {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: $white;
    &--exist {
      background-color: $white-light;
    }
  }
  &__details {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 10px 20px 20px;
    text-align: center;
    &--title {
      padding-bottom: 10px;
      font-family: 'Lato-Bold', sans-serif;
      font-size: 14px;
      letter-spacing: 1.37px;
      text-transform: uppercase;
    }
    &--subtitle {
      padding-bottom: 10px;
      font-size: 12px;
      line-height: 19px;
      letter-spacing: 0.43px;
      color: $gray;
    }
    &--price {
      padding-bottom: 20px;
      font-size: 14px;
      letter-spacing: 2.33px;
      &--strike {
        margin-right: 10px;
        text-decoration: line-through;
      }
      &--discounted {
        color: $danger;
      }
    }
    &--add-to-cart-button {
      background-color: $white;
      width: 100%;
    }
    &--in-cart-button {
      background-color: $danger;
      color: $white;
    }
  }
}
.button {
  border: 1px solid $white-light;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s border, 0.3s color, 0.3s background-color;
  margin-top: auto;
  &--round {
    display: block;
    border-radius: 50%;
  }
  &--primary {
    padding: 13px;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1.39px;
  }
}
</style>
