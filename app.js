const app = Vue.createApp({
    data(){
        return{
            url:'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img:'assets/image.jpg', isFav:true},
                { title: 'The way of Kings', author: 'Brandon Sanderson', img:'assets/the way of kings.jpg', isFav:false},
                { title: 'The final empire', author: 'Brandon Snaderson', img:'assets/the final empire.jpg', isFav:true}
            ]
            // title:'The final empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // x:0,
            // y:0
        }
    },

    methods: {
        // changeTitle(title) {
            // this.title = 'Words of Randiance'
            // this.title = title
        // }

        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        toggleFav(book){
            book.isFav = !book.isFav
        }

        // handleEvent(e, data) {
            // console.log(e, e.type)
            // if (data){
                // console.log(data)
            // }
        // },

        // handleMousemover(e){
            // this.x = e.offsetX
            // this.y = e.offsetY
        // }
        
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')

// Challenge - Add to favs
// - attach a click event to each li tag (for each book)
// -when a user clicks an li, toggle the 'isFav'