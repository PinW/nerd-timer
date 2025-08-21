<template>
  <div class="nerd-timer-base">
    <Timer />
  </div>
</template>

<script>
import Timer from './intervals/IntervalTimer.vue'

export default {
  name: 'App',
  components: {
    Timer
  }
}
</script>

<style lang="scss" scoped>

</style>
