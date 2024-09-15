<template>
  <main>

    <div class="root" id="top-nav-body">
      <slot></slot>
    </div>

  </main>
</template>

<script>
import { provide } from 'vue';

export default {
    name: 'top nav',
}
</script>

<style scoped>
.root {
  width: 100%;
  background-color: greenyellow;
  border-bottom: 1px solid black;
}
</style>