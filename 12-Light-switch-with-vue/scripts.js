Vue.createApp({
  data() {
    return {
      isOn: true,
    };
  },
  methods: {
    toggleLight() {
      console.log("Toggle Light method called");
      this.isOn = !this.isOn;
      this.updateLightState();
    },
    updateLightState() {
      const title = document.querySelector("title");

      if (this.isOn) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        title.textContent = "Good Morning";
      } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        title.textContent = "Good Night";
      }
    },
  },
}).mount("#app");
