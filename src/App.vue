<template>
  <div class="rss">
    <h1 class="rss__title">Новостная лента <span class="uppercase">regru</span></h1>
    <search />
    <list />
    <button class="button" @click="onLoad()" type="button">load rss</button>
  </div>
</template>


<script>
import Search from './components/Search.vue';
import List from './components/List.vue';
export default {
  name: 'appRoot',
  components: {
    Search,
    List
  },
  methods: {
    onLoad() {
      this.$store.dispatch('getRSS');
    }
  }
};
</script>


<style>
  .rss {
    padding: 2rem;
  }
  .uppercase {
    text-transform: uppercase;
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
