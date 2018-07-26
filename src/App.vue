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
      padding: .8rem;
      transition: background-color .2s;

      &--sticky {
        position: fixed;
        left: 0;
        top: 0;
        // width: 100%;
        width: 100vw;
        z-index: 999;
      }

      &--scrolled {
        background-color: rgba(0,0,0, .6);
      }
    }

    &__content {
      padding-top: 160px;
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
