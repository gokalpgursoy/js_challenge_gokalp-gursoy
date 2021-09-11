<template>
  <div class="base-icon">
    <span v-if="showText" class="base-icon__text" v-text="text"></span>
    <component :is="iconComponent" class="base-icon__icon" v-bind="$attrs" @v-on="$listeners" />
    <span v-if="counter" class="base-icon__counter">{{ counter }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    showText: {
      type: Boolean,
    },
    counter: {
      type: Number,
    },
  },
  data() {
    return {
      iconComponent: () => import(`@/assets/icons/${this.iconName}.svg`),
    };
  },
});
</script>

<style lang="scss" scoped>
.base-icon {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 23px;
  &__text {
    margin-right: 5px;
    font-size: 12px;
    line-height: 12px;
  }
  &__counter {
    width: 13px;
    height: 13px;
    margin-left: -1px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 8px;
    text-align: center;
    border-radius: 50%;
    color: $white;
    background-color: $blue;
  }
}
</style>
