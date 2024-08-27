<template>
  <div>
    <h1>Ninja Reaction Timer</h1>
    <button @click="startGame()" :disabled="isPlaying">Start</button>
    <Block @gameEnded="endGame" :delay="delay" v-if="isPlaying"></Block>
    <p>Reaction time: {{ score }} ms</p>
  </div>
</template>

<script>
  import Block from './components/Block.vue'

  export default {
    name: 'app',
    components: {
      Block
    },
    data() {
      return {
        isPlaying: false,
        delay: null,
        score: null
      }
    },
    methods: {
      startGame() {
        this.delay = 2000 + Math.random() * 5000
        this.isPlaying = true
        console.log(this.delay)
      },
      endGame(reactionTime) {
        this.score = reactionTime
        this.isPlaying = false
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
