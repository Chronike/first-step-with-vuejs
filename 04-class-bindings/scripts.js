// scripts.js

Vue.createApp({
  data() {
    return {
      activeLetter: "A",
    };
  },
  methods: {
    setActive(letter) {
      // Setze den aktiven Buchstaben, wenn ein Button geklickt wird
      this.activeLetter = letter;
    },
  },
}).mount("#app");
