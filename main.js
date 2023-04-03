// remove all product-specific information, since that has been moved to the product component
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            // this premium boolean will be passed to the product component
            premium: true
        }
    },
    methods: {

    }
})
