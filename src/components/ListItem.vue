<template>
  <div class="item">
    <h2 class="item__title">{{ item.title }}</h2>
    <article class="item__content" :class="contentAlign">
      <figure v-if="show" class="item__thumb">
        <img class="item__image" :class="item.picture.className" :src="item.picture.src" :alt="item.title">
      </figure>
      <p class="item__description">
        {{ item.contentSnippet | trancate }}
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
  },
  computed: {
    show() {
      return this.item.picture.className === '' ? false : true;
    },
    contentAlign() {
      return this.item.picture.className === 'b-news-article__right'
        ? 'item__content--right'
        : 'item__content--center';
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
  padding: 1rem 0.5rem 0;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &__title {
    margin: 0 0 1rem;
  }

  &__content {
    padding: 0 0.4rem;

    // IMAGE TO CENTER
    &--center {
      //
      & .item__thumb {
        text-align: center;
        margin: 0 0 1rem;

        & .item__image {
          width: 500px;
          height: auto;
        }
      }

      & .item__description {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    // IMAGE TO RIGHT
    &--right {
      &::after {
        content: ' ';
        display: block;
        height: 0;
        clear: both;
      }

      & .item__thumb {
        float: right;
        margin: 0 0 0 20px;
      }

      & .item__description {
        overflow: hidden;
        margin-top: 0;
        margin-bottom: 0;
      }

      & .item__image {
        display: block;
        width: 100px;
        height: auto;
      }
    }
  }
}
</style>
