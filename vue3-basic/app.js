const app = Vue.createApp({
    data() {
        return {
            title: "you don't know JS",
            author: "Ptr",
            age: 28,
            showBook: true,
        }
    },
    methods: {
        mouseoverHandler(event, data) {
            console.log("mouse over is working", event, data); 
        },
        mouseleaveHandler(event) {
            console.log("mouse leave is working", event); 
        },
        dblclickHandler(event) {
            console.log("dblclick is working", event); 
        }
    }
});

// use vue in only app id div 
app.mount("#app");