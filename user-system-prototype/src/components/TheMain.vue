<template>
    <div class="root">
        <SignInForm v-if="this.showSignInModal" @toggle-show-modal="this.$emit('toggleShowModal')"></SignInForm>
    </div>
</template>

<script>
import SignInForm from './SignInForm.vue'

export default {
    name: 'the main',
    props: [
        'showSignInModal'
    ],
    components: {
        SignInForm
    }
}
</script>

<style scoped>
.root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>