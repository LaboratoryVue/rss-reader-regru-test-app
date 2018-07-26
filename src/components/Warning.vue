<template>
  <div v-if="show" class="warning">
    <p class="warning__text">Ничего не найдено по вашему выбору</p>
  </div>
</template>

<script>
export default {
  name: 'Warning',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.warning {
  padding: 1rem;
  border: 2px solid red;
  border-radius: 4px;

  &__text {
    margin: 0;
    font-size: 1.6rem;
    color: red;
  }
}
</style>
