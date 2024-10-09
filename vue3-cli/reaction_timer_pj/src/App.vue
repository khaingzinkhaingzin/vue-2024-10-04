<template>
  <div>
    <h1>How fast can you catch me?</h1>
    <button @click="start" :disabled="isPlaying">play</button>

    <div v-if="isPlaying">
      <Block :delay="delay" @endGame="endGame" />
    </div>
    <Result :score="score" />
  </div>
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'
export default {
  name: 'App',
  components: {
    Block,
    Result
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
    }
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000; // between 2 second and 7 second
    },
    endGame(score) {
      this.score = score;
      
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
