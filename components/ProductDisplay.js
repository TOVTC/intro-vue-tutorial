// the first argument is the component name, second is an object to configure our component
// this allows us to encapsulate reusable code
app.component('product-display', {
    // each component has its own scope, so use props to pass data from the parent into the child component
    props: {
    // here, we are expecting a prop from the main layout called "premium"
        premium: {
            // add prop validation
            type: Boolean,
            required: true
        }
    },
    // we can grab all the product related html and add it to our template
    template:
        // this html comment activates the es6-string-html extension to provide syntax highlighting
        /*html*/
        `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <product-details :details="details"></product-details>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>`,
// then add all data, methods, and computed properties from our JS, removing the cart property which is a global property not a product property
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            // uses the premium prop to update the shipping variable in the p-tag above
            if (this.premium) {
                return 'Free'
            }
            return '$' + 2.99
        }
    }
})