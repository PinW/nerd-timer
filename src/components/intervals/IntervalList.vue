<template>
  <div class="interval-list">
    <interval-list-item :class="{'active': isActiveInterval(index)}" v-for="(item,index) in intervals" :key="item.label" :interval="item" />
  </div>
</template>

<script>
import IntervalListItem from "./IntervalListItem.vue";

export default {
  name: 'IntervalList',
  props: ['intervals','currentIntervalIndex'],
  components: {IntervalListItem},
  methods: {
    isActiveInterval(intervalIndex){
      if(intervalIndex == this.currentIntervalIndex){
        return true;
      } else {
        return false;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .interval-list {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
