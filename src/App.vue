<template>
  <div id="app" @click="handleClickBody">
    <Header />
    <main class="main">
      <Container>
        <!--You can use <router-view /> here if you use vue-router and have multiple view-->
        <Products />
      </Container>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import Products from '@/views/Products.vue';
import Header from '@/components/Header.vue';
import Container from '@/components/Container.vue';
import Footer from '@/components/Footer.vue';
import { mutations } from './store/methods';

export default Vue.extend({
  name: 'App',
  components: {
    Products,
    Header,
    Container,
    Footer,
  },
  computed: {
    ...mapState(['isShowCartPopover', 'isShowWishlistPopover']),
  },
  methods: {
    handleClickBody(event: MouseEvent) {
      event.stopPropagation();
      const element = event.srcElement as HTMLElement;
      const { classList } = element;
      const clickedElementId = element.parentElement?.parentElement?.id;
      const isElementPopover = classList.toString().includes('popover');
      if (!isElementPopover) {
        if (this.isShowCartPopover && clickedElementId !== 'bag-icon') {
          this.$store.commit(mutations.SET_IS_SHOW_CART_POPOVER, false);
        }
        if (this.isShowWishlistPopover && clickedElementId !== 'wishlist-icon') {
          this.$store.commit(mutations.SET_IS_SHOW_WISHLIST_POPOVER, false);
        }
      }
    },
  },
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
