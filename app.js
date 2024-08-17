const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: './assets/img_01.jpg', isFav: true },
                {title: 'the way of kings', author: 'brandon sanderson', img: './assets/img_02.jpg', isFav: false },
                {title: 'the final empire', author: 'brandon sanderson', img: './assets/img_03.jpg', isFav: false }
            ],
            url: "https://trello.com/b/Gi4Z6V3J/factorio-production-calculator"
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e, e.type)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

})

app.mount('#app')

