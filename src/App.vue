<template>
  <div class="rss">
    <div class="rss__header rss__header--sticky" :class="sticky">
      <h1 class="rss__title">Новостная лента <span class="uppercase">regru</span></h1>
      <search />
    </div>
    <div class="rss__content">
      <list />
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import List from './components/List.vue';
export default {
  name: 'appRoot',
  data() {
    return {
      scrolled: false,
      offset: 5
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > this.offset;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    Search,
    List
  },
  computed: {
    sticky() {
      return this.scrolled ? 'rss__header--scrolled' : '';
    }
  }
};
</script>

<style lang="scss">

  body {
    margin: 0;
    padding: 0;
  }

  .rss {
    position: relative;

    &__header {
      padding: .8rem .8rem 1.4rem;
      transition: all .2s;
      box-sizing: border-box;

      &--sticky {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 999;
      }

      &--scrolled {
        background-color: lightgreen;
        box-shadow: 0px 6px 10px 0px rgba(50, 50, 50, 0.75);
      }
    }

    &__content {
      padding-top: 180px;
    }
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
