Vue.createApp({
  data() {
    return {
      users: [
        {
          username: "Giuliano",
          status: "online",
          lastActivity: 10,
        },
        {
          username: "Paulina",
          status: "offline",
          lastActivity: 22,
        },
        {
          username: "Blanca",
          status: "online",
          lastActivity: 104,
        },
        {
          username: "Marijana",
          status: "online",
          lastActivity: 5,
        },
      ],
    };
  },
  methods: {
    recentActivity(user) {
      return user.status === "online" && user.lastActivity <= 10;
    },
    getStatusStyle(user) {
      let color = ""; // Standardfarbe

      if (user.status === "online" && this.recentActivity(user)) {
        color = "green"; // Online und aktiv
      } else if (user.status === "offline") {
        color = "grey"; // Offline
      } else if (user.status === "online" && !this.recentActivity(user)) {
        color = "red"; // Away
      }

      return { color };
    },
  },
}).mount("#app");
