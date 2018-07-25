<template>
  <div class="list">
    <list-item v-for="item in items" :key="item.guid" :item="item" />
  </div>
</template>


<script>
import ListItem from '../components/ListItem.vue'
export default {
  name: 'List',
  components: {
    ListItem
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    }
  }
};
</script>


<style lang="scss" scoped>
  .list {
    padding: 2rem;
  }
</style>
