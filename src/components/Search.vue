<template>
  <div class="search">
    <input class="search__input" type="text" name="search" placeholder="Поиск ..." />
  </div>
</template>


<script>
export default {
  name: 'Search'
};
</script>


<style lang="scss" scoped>
  .search {
    padding: .8rem;
    border: 2px solid rgba(0,0,0, .6);
    border-radius: 4px;

    &__input {
      border: none;

      &:focus {
        outline: none;
      }
    }
  }
</style>
