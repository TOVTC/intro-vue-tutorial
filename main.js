const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        deleteItem(id) {
            this.cart = this.cart.filter(item => item !== id)
        }
    }
})
