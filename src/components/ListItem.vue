<template>
  <div class="item">
    <h4 class="item__title">{{ item.title }}</h4>
    <article class="item__content"></article>
  </div>
</template>


<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
};
</script>


<style lang="scss" scoped>
  .item {
    // padding: 2rem;
  }
</style>
