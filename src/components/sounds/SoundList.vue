<template>
  <div class="sound-list">
    <sound-list-item :class="{'active': isActiveSound(item.name)}" v-for="item in sounds" :key="item.name" @click="selectSound(item.name)" :sound="item" />
  </div>
</template>

<script>
import SoundListItem from "./SoundListItem.vue";

export default {
  name: 'SoundList',
  props: ['sounds','selectedAlarmSound'],
  components: {SoundListItem},
  methods: {
    isActiveSound(soundName){
      if(soundName == this.selectedAlarmSound.name){
        return true;
      } else {
        return false;
      }
    },
    selectSound(soundName){
      this.$emit('select-sound',soundName);
    }
  }
}
</script>

<style lang="scss" scoped>
  .sound-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 5px;
    background-color: $background-dark-overlay;
  }
</style>
