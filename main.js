// this tutorial uses CDN to import Vue
// create new instance of Vue app, passing in mandatory "Options object"
// Options object adds additional properties to configure the application (must be included, but can be empty)
const app = Vue.createApp({
    // data option returns object with app data
    data() {
        // 
        return {
            product: "Socks",
            description: "A pair of socks"
        }
    }
})
