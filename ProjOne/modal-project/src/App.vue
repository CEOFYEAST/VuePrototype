<template>
  <h1>{{ title }}</h1>
  <p>Welcome!</p>
  <button @click.alt="toggleModal">open modal (alt)</button>
  <button @click.ctrl="toggleModalTwo">open modal two (ctrl)</button>
  <div v-if="showModal">
    <Modal :sale="sale" @close="toggleModal">
      <h1>Welcome to the Diebold store</h1>
      <p v-if="sale">SALE!! Everything Half-Off</p>
      <template v-slot:links>
        <a href="#">Hot Items</a>
        <a href="#">Rewards Program</a>
      </template>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal :theme="theme" @close="toggleModalTwo">
      <h1>Contact Info</h1>
      <p>You can reach us @</p>
      <template v-slot:links>
        <a href="#">816-718-0592</a>
      </template>
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
      sale: true,
      theme: "dark",
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
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
