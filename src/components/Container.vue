<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Container',
});
</script>

<style lang="scss" scoped>
.container {
  background: $white;
  width: 100%;
  max-width: 1240px;
  padding: 0px 40px;
  margin: 0px auto;
}
</style>
