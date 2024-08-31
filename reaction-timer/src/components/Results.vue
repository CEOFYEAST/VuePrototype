<template>
    <div class="block">
        <h1>Results</h1>
        <p>Reaction time: {{ score }} ms</p>
        <h2>{{ rank }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'results',
        props: ['score'],
        data() {
            return {
                rank: null,
                slowRank: "Slow",
                quickRank: "Quick",
                blazingRank: "Blazing Fast!!"
            }
        },
        mounted() {
            if(this.score <= 250){ this.rank = this.blazingRank }
            else if(this.score <= 350){ this.rank = this.quickRank }
            else { this.rank = this.slowRank }
        }
    }
</script>

<style scoped>

</style>