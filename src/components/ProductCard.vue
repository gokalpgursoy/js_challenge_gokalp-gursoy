<template>
  <article class="product">
    <figure class="product__image-wrapper">
      <img class="product__image" src="../assets/images/activity_image.jpeg" alt="PRODUCT_TITLE" />
      <button class="product__wishlist-button button button--round button--wishlist">
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
      <button class="product__details--add-to-cart button button--primary">ADD TO CART</button>
    </div>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { ProductModel } from '@/models/ProductModel';

export default Vue.extend({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<ProductModel>,
      required: true,
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
      color: #808080;
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
        color: #f54b5e;
      }
    }
    &--add-to-cart {
      width: 100%;
      margin-top: auto;
    }
  }
}
.button {
  border: 1px solid #d9d9d9;
  border-radius: 100px;
  background-color: #ffffff;
  cursor: pointer;
  transition: 0.3s border, 0.3s color, 0.3s background-color;
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
