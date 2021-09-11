<template>
  <footer class="footer">
    <Container class="footer__container">
      <p class="footer__container--sidenote">Footer</p>
    </Container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from './Container.vue';

export default Vue.extend({
  components: { Container },
  name: 'Footer',
});
</script>

<style lang="scss" scoped>
.footer {
  background-color: #ffffff;
  &__container {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
    background-color: #ffffff;
    &--sidenote {
      font-family: 'Lato-Bold', sans-serif;
      letter-spacing: 1.37px;
    }
  }
}
</style>
