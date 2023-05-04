const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {title: "windy moon", author: "Omobola"},
                {title: "Kings way", author: "Adewolu"},
                {title: "Final empire", author: "Oladoja"}
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