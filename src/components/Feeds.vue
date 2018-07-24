<template>
  <div class="feeds">
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'Feeds',
  computed: {
    feeds() {
      return this.$store.state.feeds;
    }
  }
}
</script>

<style scoped lang="scss">
//
</style>
