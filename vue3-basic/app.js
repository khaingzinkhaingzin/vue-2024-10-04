const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title: "you don't know JS",
                    author: "Ptr",
                    age: 27,
                },
                {
                    title: "Book 2",
                    author: "Sonya",
                    age: 28,
                },
                {
                    title: "Book 2",
                    author: "Lookmhee",
                    age: 29,
                }
            ],
            showBook: true,
        }
    },
    methods: {
    }
});

// use vue in only app id div 
app.mount("#app");