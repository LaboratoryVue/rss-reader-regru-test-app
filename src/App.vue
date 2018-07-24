<template>
  <div id="app">
    <feeds />
  </div>
</template>

<script>
import Feeds from './components/Feeds';
export default {
  name: 'app',
  components: {
    Feeds
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
