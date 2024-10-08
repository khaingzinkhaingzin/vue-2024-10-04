<template>
  <div>
    <h1>How fast can you catch me?</h1>
    <button @click="start" :disabled="isPlaying">play</button>

    <div v-if="isPlaying">
      <Block :delay="delay" />
    </div>
  </div>
</template>

<script>
import Block from './components/Block.vue'
export default {
  name: 'App',
  components: {
    Block,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
    }
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000; // between 2 second and 7 second
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
