<template>
  <div class="popover">
    ProductPopover
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductPopover',
  props: {},
});
</script>

<style lang="scss" scoped>
.popover {
  width: 200px;
  height: 600px;
  overflow: auto;
  background-color: $primary;
  color: $secondary;
  padding: 8px;
  position: absolute;
  top: 25px;
  left: -175px;
  z-index: 1;
}
</style>
