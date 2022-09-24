const app = Vue.createApp({
    data() {
        return {
            name: "",
            email: "",
        }
    },

    methods: {
        handleKeyup(e)
        {
            // console.log(e);
            this.name = e.target.value;
        },
        handleKeyup2(e)
        {
            this.email = e.target.value;
        },
        handleFormSubmit(e)
        {
            console.log("Form Submitted!");
            // e.preventDefault();
        },
        handleCardClick(e)
        {
            console.log(e);
            console.log("Card Clicked!");
        },
        handleViewClick(e)
        {
            e.stopPropagation(); // it can also be used as @click.stop in html file
            console.log(e);
            console.log("View Button Clicked!")
        }

    }
});

app.mount("#app");