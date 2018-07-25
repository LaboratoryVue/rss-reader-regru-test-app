<template>
  <div class="list">
    <list-item v-for="item in items" :key="itemID(item.guid)" :item="item" />
  </div>
</template>


<script>
import ListItem from '../components/ListItem.vue';
export default {
  name: 'List',
  components: {
    ListItem
  },
  methods: {
    itemID(value) {
      return value.match(/\d+$/)[0];
    }
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
  padding: 2rem 0;
}
</style>
