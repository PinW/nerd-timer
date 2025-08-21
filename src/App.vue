<template>
  <div class="nerd-timer-app">
    <nerd-timer-base />
  </div>
</template>

<script>
import NerdTimerBase from './components/NerdTimerBase.vue'

export default {
  name: 'App',
  components: {
    NerdTimerBase
  }
}
</script>

<style lang="scss">
@import "@/base/styles/base.scss";

.nerd-timer-app {
  min-height: 100vh;
}

</style>
