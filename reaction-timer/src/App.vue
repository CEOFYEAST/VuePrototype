<template>
  <div>
    <h1>Ninja Reaction Timer</h1>
    <button @click="startGame()" :disabled="isPlaying">Start</button>
    <Block @gameEnded="endGame" :delay="delay" v-if="isPlaying" />
    <Results :score="score" v-if="showResults" />
  </div>
</template>

<script>
  import Block from './components/Block.vue'
  import Results from './components/Results.vue'

  export default {
    name: 'app',
    components: {
      Block,
      Results
    },
    data() {
      return {
        isPlaying: false,
        delay: null,
        score: null,
        showResults: false
      }
    },
    methods: {
      startGame() {
        this.delay = 2000 + Math.random() * 5000
        this.isPlaying = true
        this.showResults = false
      },
      endGame(reactionTime) {
        this.score = reactionTime
        this.isPlaying = false
        this.showResults = true
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
