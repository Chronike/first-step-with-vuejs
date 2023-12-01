Vue.createApp({
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    changeTab(tabNumber) {
      // Ändere den aktiven Tab
      this.activeTab = tabNumber;
    },
  },
}).mount("#app");
