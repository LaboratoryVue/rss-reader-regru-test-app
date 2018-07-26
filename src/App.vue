<template>
  <div class="rss">
    <h1 class="rss__title">Новостная лента <span class="uppercase">regru</span></h1>
    <search />
    <list />
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
