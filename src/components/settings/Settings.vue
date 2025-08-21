<template>
  <div class="settings">
      <div class="repeat-option">
        <input id="repeat-option" type="checkbox" :checked="repeatForever" @click="toggleRepeat" />
        <label for="repeat-option">Repeat Forever</label>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Settings',
  props: {
    repeatForever: Boolean,
  },
  methods: {
    toggleRepeat() {
      this.$emit('toggle-repeat');
    }
  }
}
</script>

<style lang="scss" scoped>
  .settings {
    width: 100%;
    .repeat-option {
      color: $text-supplemental-color;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 20px;
      background-color: $background-dark-overlay;
      border-top: 1px solid $border-dark;
      * {
        opacity: 0.6;
      }
      label {
        user-select: none;
      }
    }
  }
</style>
