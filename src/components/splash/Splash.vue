<template>
  <div class="splash">
    <h1>Fix your nerd neck</h1>
    <h2><em>Timed reminders</em> with <em>guided exercises</em> and <em>adjustable difficulty</em></h2>
    <div class="start-actions">
      <button class="primary start-button" @click="startTimer">Start Timer</button>
      <button class="primary start-exercise" @click="startExercise">Start Exercise</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Splash',
  methods: {
    startTimer(){
      this.$emit('start-clock',0);
    },
    startExercise(){
      this.$emit('start-clock',1);
    }
  }
}
</script>

<style lang="scss" scoped>
  .splash {
    width: 100%;
    height: 100%;
    background-color: rgba($background-color, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5%;
    .start-actions {
      margin-top: 70px;
      display: flex;
      button:not(:last-of-type) {
        margin-right: 14px;
      }
    }
  }
</style>
