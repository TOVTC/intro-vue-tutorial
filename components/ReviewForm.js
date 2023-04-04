app.component('review-form', {
    // v-bind only works in one direction, from the data to the template
    // binding from the template to the data is done by v-model, to create two-way data binding

    // use v-model to create a binding between the input fields and the data object
    // .number is a modifier for v-model that typcasts the value as a number
    // don't forget to add a listener to the form and use the .prevent modifier to prevent default
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
    
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
    
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommend">Would you recommend this product?</label>
        <select id="recommend" v-model.boolean="recommend">
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
    
        <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null
        }
    },
    methods: {
        onSubmit() {
            // add validation
            if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
                alert('Review is incomplete. Please fill out every field.')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            // emit an event to pass this data back up to the parent component in the payload
            this.$emit('review-submitted', productReview)

            // reset the form
            this.name = ''
            this.review= ''
            this.rating = null
            this.recommend = null
        }
    }
})