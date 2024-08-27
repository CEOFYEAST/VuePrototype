<template>
  <div>
    <h1>Ninja Reaction Timer</h1>
    <button @click="startGame()" :disabled="isPlaying">Start</button>
    <Block :delay="delay" v-if="isPlaying"></Block>
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
        delay: null
      }
    },
    methods: {
      startGame() {
        this.delay = 2000 + Math.random() * 5000
        this.isPlaying = true
        console.log(this.delay)
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
