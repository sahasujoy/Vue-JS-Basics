const app = Vue.createApp({
    data() {
        return {
            activeClass: "red",
        }
    },

    methods: {
        setClass(className)
        {
            this.activeClass = className;
        }
    },
});

app.mount("#app");

// Here u understand how to bind class in vue js