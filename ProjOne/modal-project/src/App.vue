<template>
  <h1>{{ title }}</h1>
  <p>Welcome!</p>
  <button @click.alt="toggleModal">open modal (alt)</button>
  <div v-if="showModal">
    <Modal :theme="theme" :sale="sale" @close="toggleModal">
       <template v-slot:links>
        <a href="#">sign up now?</a>
        <a href="#">more info</a>
       </template>
      <h1>Giveaway!</h1>
      <p>Grab swag for half price!</p>
    </Modal>
  </div>
  
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      header: "stuff sold here",
      text: "get some stuff at a reasonable price",
      theme: "dark",
      sale: "true",
      title: "My App",
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
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
