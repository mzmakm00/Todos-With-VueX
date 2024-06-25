<template>
    <div>
      <button @click="toggleButtonClicked">{{ buttonText }}</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'ButtonToggle',
    computed: {
      ...mapGetters(['isButtonClicked']),
      buttonText() {
        return this.isButtonClicked ? 'Clicked' : 'Click Me';
      }
    },
    methods: {
      ...mapActions(['toggleButtonClicked'])
    }
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  