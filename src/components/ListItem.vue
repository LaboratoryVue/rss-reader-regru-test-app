<template>
  <div class="item">
    <h3 class="item__title">{{ item.title }}</h3>
    <article class="item__content">
      <p class="item__description">
        {{ item.contentSnippet | trancate }}
      </p>
      <figure v-if="show" class="item__thumb">
        <img :class="item.picture.className" :src="item.picture.src" :alt="item.title">
      </figure>
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
  },
  computed: {
    show() {
      return this.item.picture.className === '' ? false : true;
    }
  },
  filters: {
    trancate(value) {
      return value.split('\n')[0];
    }
  }
};
</script>


<style lang="scss" scoped>
.item {
  padding: 1rem 0.5rem;

  &__title {
    margin: 0 0 1rem;
  }
}
</style>
