<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal Title</h1>
            <br>
            <p>modal content</p>
        </div>
    </div>
</template>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: black;
        width: 100%;
        height: 100%;
    }
    h1 {
        color: green;
    }
</style>