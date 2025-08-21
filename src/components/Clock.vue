<template>
  <div class="clock" :class="{paused: !active}"><readable-time :time="clockTime" /></div>
</template>

<script>
  export default {
    name: 'Clock',
    props: {
      initialClockTime: {
        default: 60,
        type: Number
      },
      active: {
        default: true,
        type: Boolean
      }
    },
    data() {
      return {
        clockTime: this.initialClockTime,
        clockInterval: null,
      }
    },
    computed: {
      timePassed(){
        return this.initialClockTime - this.clockTime;
      },
      readableTime(){
        //convert seconds into readable time
        const time = this.clockTime;
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) seconds = `0${seconds}`;

        return `${minutes}:${seconds}`
      }
    },
    methods: {
      startClock() {
        clearInterval(this.clockInterval);
        this.clockInterval = setInterval(() => {
            if(this.active) {
              this.clockTime -= 1;
              if(this.clockTime == 0) {
                this.clockAlarm();
                this.stopClock();
              }
            }
          }, 1000);
      },
      clockAlarm(){
        //sound and animation for clock timeout
        this.$emit('clock-alarm');
      },
      stopClock(){
        clearInterval(this.clockInterval);
      },
      resetClock() {
        this.clockTime = this.initialClockTime;
      },
    },
    watch: { 
      initialClockTime: function() {
        this.clockTime = this.initialClockTime;
        this.startClock();
      },
      clockTime: function() {
        this.$emit('clock-updated',this.readableTime);
      },
      active: function(to){
        if(to == true){
          this.startClock();
        } else {
          this.stopClock();
        }
      }
    },
    mounted() {
      if (this.active) {
        this.startClock();
      }
    }
  }
</script>

<style scoped lang="scss">
  .clock {
    font-weight: bold;
    font-size: 20vh;
    &.paused {
      color: $paused-color;
    }
  }
</style>