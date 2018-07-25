<template>
  <div class="list">
    <list-item />
  </div>
</template>


<script>
import ListItem from '../components/ListItem.vue'
export default {
  name: 'List',
  components: {
    ListItem
  }
};
</script>


<style lang="scss" scoped>
  .list {
    padding: 2rem;
  }
</style>
