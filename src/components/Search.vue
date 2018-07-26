<template>
  <div class="search">
    <input v-model="search" class="search__input" type="text" name="search" placeholder="Поиск ..." />
  </div>
</template>

<script>
export default {
  name: 'Search',
  computed: {
    search: {
      get() { return this.$store.getters.getSearch },
      set(value) { this.$store.dispatch('setSearch', value) }
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  padding: 0.1rem;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 4px;

  &__input {
    border: none;
    padding: 0.4rem 0.8rem;
    font-size: 1.6rem;

    &:focus {
      outline: none;
    }
  }
}
</style>
