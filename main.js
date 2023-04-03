const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    // add a list of methods to the app
    methods: {
        addToCart() {
            // refers to the cart in this instance of our Vue app
            this.cart += 1
        },
            // refers to the image currently being displayed in our Vue app instance
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        }
    }
})
