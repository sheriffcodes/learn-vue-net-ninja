const app = Vue.createApp({
    data() {
        return {
            url: "https://google.com",
            showBooks: true,
            books: [
                {title: "windy moon", author: "Omobola", img: "assets/1.jpg"},
                {title: "Kings way", author: "Adewolu", img: "assets/2.jpg"},
                {title: "Final empire", author: "Oladoja", img: "assets/3.jpg"}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }

})

app.mount('#app')