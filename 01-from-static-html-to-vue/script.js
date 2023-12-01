const app = Vue.createApp({
  data() {
    return {
      Name: "John Doe",
      currentDate: new Date().toLocaleString("en-US"),
    };
  },
});

app.mount("#app");
