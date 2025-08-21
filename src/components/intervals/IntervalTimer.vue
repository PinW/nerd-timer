<template>
  <div class="interval-timer">
    <div class="clock-container">
      <clock :initialClockTime="intervals[currentIntervalIndex].intervalTime" :active="!paused" v-on:clock-alarm="onClockEnd" v-on:clock-updated="updateDocumentTitle" @click="togglePause()" :key="currentIntervalIndex" />
      <transition name="fade">
        <splash @start-clock="startIntervalTimer" v-if="showSplash" />
      </transition>
    </div>
    <div class="menu">
      <interval-list :intervals="intervals" :currentIntervalIndex="currentIntervalIndex" />
      <div class="spacer"></div>
      <h4>Alarm Sound Selection:</h4>
      <sound-list :sounds="alarmSounds" :selectedAlarmSound="selectedAlarmSound.info" v-on:select-sound="selectSound" />
      <settings :repeat-forever="repeatForever" v-on:toggle-repeat="repeatForever = !repeatForever" />
    </div>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";
import IntervalList from "./IntervalList.vue";
import SoundList from "../sounds/SoundList.vue";
import Settings from "../settings/Settings.vue";
import Splash from "../splash/Splash.vue";

export default {
  name: 'IntervalTimer',
  props: {
    repeatCount: Number,
  },
  data() {
    return {
      intervals: [
        /*Nerd Neck Reminder Intervals */
        {
          label: 'Nerd Time',
          intervalTime: 3600,
          playAlarm: true,
        },
        {
          label: 'Exercise Window',
          intervalTime: 600,
          playAlarm: false,
        }, 

        /* Neck extension intervals  */
        /*{
          label: 'Neck Extensions',
          intervalTime: 120,
          playAlarm: true,
        },
        {
          label: 'Side Neck Extensions Right',
          intervalTime: 120,
          playAlarm: true,
        },
        {
          label: 'Side Neck Extensions Left',
          intervalTime: 120,
          playAlarm: true,
        }, */

        /* 2min Round w/ 30second breaks (interval training/shadowboxing)
        {
          label: 'Round',
          intervalTime: 120,
          playAlarm: true,
        },
        {
          label: 'Break',
          intervalTime: 30,
          playAlarm: true,
        },*/
      ],
      alarmSounds: [
          {
            name: 'David Goggins - Lobster Dinner',
            file: 'david-goggins-1-lobsterdinner.mp3',
            alarmLength: 69,
          },
          {
            name: 'David Goggins - Get Out of Your Head',
            file: 'david-goggins-2-getoutofyourhead.mp3',
            alarmLength: 60,
          },
          {
            name: 'David Goggins - Stay Hard',
            file: 'david-goggins-stayhard.mp3',
            alarmLength: 3,
          },
          {
            name: 'Jocko Willink - Good',
            file: 'jocko-good.mp3',
            alarmLength: 139,
          },
          {
            name: 'Beep Beep Soft',
            file: 'beep-alarm-soft-2x-3s.mp3',
            alarmLength: 3,
          },
          {
            name: 'Beep Beep Alarm',
            file: 'beep-alarm-4s.mp3',
            alarmLength: 4,
          },
          {
            name: 'Beep Beep High',
            file: 'beep-alarm-3x-2s.mp3',
            alarmLength: 2,
          },
          {
            name: 'Meditation Bell',
            file: 'meditation-bell.mp3',
            alarmLength: 8,
          },
          {
            name: 'Tibetan Singing Bowl',
            file: 'gong-6s.mp3',
            alarmLength: 6,
          },
          {
            name: 'Gongs',
            file: 'gongs-3x-15s.mp3',
            alarmLength: 15,
          },
      ],
      currentIntervalIndex: 0,
      selectedAlarmSound: {
        audio: null,
        info: null,
      },
      repeatForever: true,
      paused: true,
      showSplash: true,
    }
  },
  created() {
    //temp setting for selected alarm Sound
    this.selectSound('Beep Beep High');
  },
  methods: {
    togglePause(){
      this.paused = !this.paused;
    },
    startIntervalTimer(startingInterval){
      this.currentIntervalIndex = startingInterval;
      this.paused = false;
      this.showSplash = false;
    },
    onClockEnd() {
      //send clock alert and start the next clock interval if it exists
      const currentInterval = this.intervals[this.currentIntervalIndex];
      if(currentInterval.playAlarm){
        this.selectedAlarmSound.audio.play();
      }
      if(this.currentIntervalIndex < (this.intervals.length - 1)){
        this.currentIntervalIndex += 1;
      } else if (this.repeatForever) {
        this.currentIntervalIndex = 0;
      }
    },
    updateDocumentTitle: function(time) {
      document.title = time + " — " + this.intervals[this.currentIntervalIndex].label;
    },
    selectSound(soundName){
      const targetAlarmSound = this.alarmSounds.find(sound => sound.name == soundName);
      const targetAlarmFileName = targetAlarmSound.file;
      //Vite asset handling - construct the URL for the asset
      this.selectedAlarmSound.audio = new Audio(`/src/assets/sounds/alerts/${targetAlarmFileName}`);
      this.selectedAlarmSound.info = targetAlarmSound;
    },
  },
  mounted() {
  },
  components: {Clock, IntervalList, SoundList, Settings, Splash},
}
</script>

<style lang="scss" scoped>
  .interval-timer {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .clock-container {
      position: relative;
      height: 100vh;
      padding: 5%;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .clock {
        cursor: pointer;
      }
      .splash {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      flex-direction: column;
      align-items: flex-start;
      background-color: $background-foreground-color;
      height: 100vh;
      width: 250px;
      h4 {
        font-size: 0.7em;
        padding: 10px 20px;
        margin: 0;
        font-weight: normal;
        text-transform: uppercase;
        font-style: italic;
        color: $text-supplemental-color;
      }
      .spacer {
        flex-grow: 1;
      }
    
    }
  }
</style>
