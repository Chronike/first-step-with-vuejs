new Vue({
  el: "#app",
  data: {
    red: 255,
    green: 105,
    blue: 180,
  },
  computed: {
    color: function () {
      return "RGB(" + this.red + ", " + this.green + ", " + this.blue + ")";
    },
  },
  methods: {
    updateColor: function () {
      document.body.style.backgroundColor =
        "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
    },
    getRandomColor: async function () {
      try {
        const response = await fetch(
          "https://dummy-apis.netlify.app/api/color"
        );
        const data = await response.json();
        const { rgb } = data;

        this.red = rgb.r;
        this.green = rgb.g;
        this.blue = rgb.b;

        this.updateColor();
      } catch (error) {
        console.error("Error fetching random color:", error);
      }
    },
  },
  mounted: function () {
    this.getRandomColor();
  },
});
