const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title: "you don't know JS",
                    author: "Ptr",
                    age: 27,
                    img: "imgs/img1.png",
                    isFav: true,
                },
                {
                    title: "Book 2",
                    author: "Sonya",
                    age: 28,
                    img: "imgs/img2.jpeg",
                    isFav: false,
                },
                {
                    title: "Book 2",
                    author: "Lookmhee",
                    age: 29,
                    img: "imgs/img3.jpg",
                    isFav: false,
                }
            ],
            showBook: true,
            link: "https://www.google.com/",
        }
    },
    methods: {
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => {
                return book.isFav;
            });
        }
    }
});

// use vue in only app id div 
app.mount("#app");