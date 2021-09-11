<template>
  <div class="base-icon">
    <span class="base-icon__text" v-text="text"></span>
    <component :is="iconComponent" class="base-icon__icon" v-bind="$attrs" @v-on="$listeners" />
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
  align-items: flex-end;
  &__text {
    margin-right: 5px;
    font-size: 12px;
    line-height: 12px;
  }
}
</style>
