<template>
  <div id="app">
    <Header />
    <main class="main">
      <Container>
        <Products />
      </Container>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Products from '@/views/Products.vue';
import Header from '@/components/Header.vue';
import Container from '@/components/Container.vue';

export default Vue.extend({
  components: { Products, Header, Container },
  name: 'App',
});
</script>

<style lang="scss" scoped>
.main {
  padding-top: 40px;
}
</style>
