const app = Vue.createApp({
    data() {
        return {
            title: "you don't know JS",
            author: "Ptr",
            age: 28
        }
    },
    methods: {
        increaseAge() {
            this.age++;
        }
    }
});

// use vue in only app id div 
app.mount("#app");