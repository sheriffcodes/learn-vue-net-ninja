const app = Vue.createApp({
    data() {
        return {
            url: "https://google.com",
            showBooks: true,
            books: [
                {title: "windy moon", author: "Omobola", img: "assets/1.jpg", isFav: true},
                {title: "Kings way", author: "Adewolu", img: "assets/2.jpg", isFav: false},
                {title: "Final empire", author: "Oladoja", img: "assets/3.jpg", isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(item) {
            item.isFav = !item.isFav
        }
    }

})

app.mount('#app')