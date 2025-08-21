<template>
  <span class="readable-time">{{ readableTime }}</span>
</template>

<script>

export default {
  name: 'ReadableTime',
  props: ['time'],
  computed: {
    readableTime(){
      //convert seconds into readable time
      const time = this.time;
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (seconds < 10) seconds = `0${seconds}`;

      return `${minutes}:${seconds}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
