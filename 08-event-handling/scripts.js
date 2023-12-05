Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    updateCoordinates(event) {
      if (!event.target.classList.contains("dead-spot")) {
        this.x = event.offsetX;
        this.y = event.offsetY;
      }
    },
    removeFruit(index) {
      this.fruitBasket.splice(index, 1);
    },
  },
}).mount("#app");
