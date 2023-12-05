Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count = Math.min(this.count + 1, 100);
    },
    resetCount() {
      this.count = 0;
    },
  },
}).mount("#app");
