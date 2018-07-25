<template>
  <div class="app-layout">
    <button class="button" @click="onLoad()" type="button">load rss</button>
  </div>
</template>


<script>
const REG = 'https://www.reg.ru/company/news/rss';
export default {
  name: 'appRoot',
  methods: {
    onLoad() {
      this.$store.dispatch('getRSS');
    }
  }
};
</script>


<style>
  .app-layout {
    padding: 2rem;
  }
  .button {
    cursor: pointer;
    text-transform: uppercase;
  }
  .button:active,
  .button:focus {
    outline: none;
  }
</style>
