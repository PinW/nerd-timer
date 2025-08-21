<template>
  <div class="sound-item" >
    <span class="sound-name">{{ sound.name }}</span>
    <span class="sound-length"><readable-time :time="sound.alarmLength" /></span>
  </div>
</template>

<script>

export default {
  name: 'SoundListItem',
  props: ['sound'],
}
</script>

<style lang="scss" scoped>
  .sound-item {
    padding: 10px 20px;
    border-top: 1px solid $border-dark;
    font-size: 0.8em;
    color: $text-color;
    cursor: pointer;
    opacity: 0.5;
    .sound-length {
      margin-left: 5px;
      font-size: 0.8em;
      color: $text-supplemental-color;
    }
    &.active {
      opacity: 1;
      font-weight: bold;
    }
  }
</style>
