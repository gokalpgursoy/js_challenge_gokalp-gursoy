<template>
  <div id="app">
    <Header />
    <main class="main">
      <Container>
        <!--You can use <router-view /> here if you use vue-router and have multiple view-->
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
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  margin: 30px 0 20px;
}
</style>
