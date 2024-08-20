<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ 'sale': sale }">
            <slot>Default Content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'sale' ],
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
</style>