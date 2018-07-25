<template>
  <div class="item">
    <h4 class="item__title">{{ item.title.trim() }}</h4>
    <article class="item__content">
      <p class="item__description">
        {{ item.description['#text'] }}
      </p>
    </article>
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
    padding: 1rem .5rem;

    &__title {
      margin: 0 0 1rem;
    }
  }
</style>
