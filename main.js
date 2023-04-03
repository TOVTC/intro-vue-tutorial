const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            // this path will be imported into html
            image: './assets/images/socks_green.jpg',
            url: "https://vuejs.org/guide/introduction.html"
        }
    }
})
