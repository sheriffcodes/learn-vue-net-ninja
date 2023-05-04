const app = Vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: "Adewole",
            age: 45
        }
    },
    methods: {
        changeTitle(newTitle) {
            // this.title = "Price of life"
            this.title = newTitle
        }
    }

})

app.mount('#app')