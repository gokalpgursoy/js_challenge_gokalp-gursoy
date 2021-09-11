<template>
  <header class="header">
    <Container class="header-container">
      <h1 class="header-container__title">BRAND</h1>
      <aside class="header-container__bag">
        <BaseIcon icon-name="bag" text="$210" />
        <BaseIcon icon-name="wishlist" />
      </aside>
    </Container>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

import Container from '@/components/Container.vue';

export default Vue.extend({
  name: 'Header',
  components: { Container },
});
</script>

<style lang="scss" scoped>
.header {
  background: $white;
  height: 60px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__title {
      font-size: 20px;
    }
    &__bag {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 10px;
    }
  }
}
</style>
