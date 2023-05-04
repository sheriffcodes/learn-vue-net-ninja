const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: "Adewole",
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            // a way to set it to the opposite - true/false
            this.showBooks = !this.showBooks
        }
    }

})

app.mount('#app')