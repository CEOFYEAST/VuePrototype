<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="[theme, { 'sale': sale }]">
            <h1>{{ header }}</h1>
            <br>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'header', 'text', 'theme', 'sale' ],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        border-radius: 10px;
    }
    .dark {
        background: black;
        color:white;
    }
    .light {
        background: white;
        color:black;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: white;
        width: 100%;
        height: 100%;
    }
</style>