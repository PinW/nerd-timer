<template>
  <div class="interval">
    <div class="interval-label">{{ interval.label }}</div>
    <div class="interval-time"><readable-time :time="interval.intervalTime" /></div>
  </div>
</template>

<script>

export default {
  name: 'IntervalListItem',
  props: ['interval'],
}
</script>

<style lang="scss" scoped>
  $interval-spacing: 25px;
  .interval {
    padding: $interval-spacing 20px;
    width: 100%;
    font-size: 1em;
    display: flex;
    color: $text-supplemental-color;
    border-bottom: 1px solid $border-dark;
    background-image: linear-gradient(rgba(black, 0), rgba(black, 0.02));
    &.active {
      //background-image: linear-gradient(rgba(red, 0.2), rgba(blue, 0.2));
      font-weight: bold;
      color: $text-highlight-color;
    }
    .interval-label {
      flex-grow: 1;
    }
    .interval-time {
      margin-left: 15px;
      text-align: right;
    }
  }
</style>
