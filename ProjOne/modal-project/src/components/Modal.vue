<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="[theme=theme, { 'sale': sale }]">
            <slot>Default Content</slot>
            <div class="actions flex column">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'sale', 'theme' ],
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
        border: 2px solid black;
        border-radius: 4px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: white;
        width: 100%;
        height: 100%;
    }
    .modal.sale {
        color: green;
        background-color: red;
    }
    .modal.dark {
        color: white;
        background-color: black;
    }
    
</style>