<template>
  <div class="list">
    <warning :show="warning" />
    <list-item v-for="item in items" :key="itemID(item.guid)" :item="item" />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import Warning from '../components/Warning.vue';
export default {
  name: 'List',
  components: {
    ListItem,
    Warning
  },
  methods: {
    itemID(value) {
      return value.match(/\d+$/)[0];
    }
  },
  computed: {
    items() {
      return this.$store.getters.getItemsFiltered;
    },
    warning() {
      return this.items.length > 0 ? false : true;
    }
  }
};
</script>


<style lang="scss" scoped>
.list {
  padding: 2rem 0;
}
</style>
