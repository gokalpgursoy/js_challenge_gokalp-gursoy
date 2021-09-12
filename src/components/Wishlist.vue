<template>
  <div>
    <BaseIcon icon-name="wishlist" :counter="wishlist.length" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Cart',
  computed: {
    ...mapState(['wishlist']),
  },
});
</script>

<style lang="scss" scoped></style>
