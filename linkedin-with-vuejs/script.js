const app = new Vue({
  el: "#app",
  data: {
    linkedinUser: [],
    count: 0,
  },
  mounted() {
    this.getContact();
  },
  methods: {
    kopf() {
      const headerEl = document.querySelector("header");
      const phead = document.createElement("p");
      headerEl.innerHTML = "";
      headerEl.appendChild(phead);

      phead.innerText = this.count + " " + "pending invitation";
    },
    getContact() {
      fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
        .then((response) => response.json())
        .then((jsonData) => {
          this.linkedinUser = jsonData.map((contact) => {
            return { ...contact, connectionStatus: "Connect" };
          });
        });
    },
    getOneContact() {
      return fetch(
        "https://dummy-apis.netlify.app/api/contact-suggestions?count=1"
      )
        .then((response) => response.json())
        .then((jsonData) => jsonData[0]);
    },
    renderContacts() {
      const mainEl = document.querySelector("main");
      for (let contact of this.linkedinUser) {
        const bgImgSection = document.createElement("figure");
        bgImgSection.setAttribute("class", "bg-img-figure");
        const contactBlockEl = document.createElement("article");
        mainEl.appendChild(contactBlockEl);
        contactBlockEl.appendChild(bgImgSection);

        const removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "remove-btn");
        bgImgSection.appendChild(removeBtn);
        removeBtn.innerText = "remove";
        removeBtn.addEventListener("click", () => this.removeContact(contact));

        const backgroundImageEl = document.createElement("img");
        backgroundImageEl.setAttribute("class", "bg-img");
        backgroundImageEl.src = contact.backgroundImage;
        bgImgSection.appendChild(backgroundImageEl);

        const profilePicEl = document.createElement("img");
        profilePicEl.setAttribute("class", "profile-pic");
        profilePicEl.src = contact.picture;
        contactBlockEl.appendChild(profilePicEl);

        const titleEl = document.createElement("p");
        titleEl.setAttribute("class", "title");
        titleEl.innerText = contact.name.title;
        contactBlockEl.appendChild(titleEl);

        const firstNameEl = document.createElement("p");
        firstNameEl.setAttribute("class", "firstname");
        firstNameEl.innerText = contact.name.first;
        contactBlockEl.appendChild(firstNameEl);

        const lastNameEl = document.createElement("p");
        lastNameEl.setAttribute("class", "lastname");
        lastNameEl.innerText = contact.name.last;
        contactBlockEl.appendChild(lastNameEl);

        const professionEl = document.createElement("p");
        professionEl.setAttribute("class", "profession");
        professionEl.innerText = contact.title;
        contactBlockEl.appendChild(professionEl);

        const mutualConnections = document.createElement("p");
        mutualConnections.setAttribute("class", "mutual-con");
        mutualConnections.innerText =
          contact.mutualConnections + " " + "mutual connections";
        contactBlockEl.appendChild(mutualConnections);

        const connectBtn = document.createElement("button");
        connectBtn.setAttribute("class", "connect-btn");
        connectBtn.textContent = contact.connectionStatus;
        contactBlockEl.appendChild(connectBtn);
        connectBtn.addEventListener("click", () =>
          this.toggleConnectionStatus(contact)
        );
      }
    },
    removeContact(contact) {
      const indexToRemove = this.linkedinUser.indexOf(contact);
      if (indexToRemove !== -1) {
        this.linkedinUser.splice(indexToRemove, 1);
        this.getOneContact().then((newContact) => {
          this.linkedinUser.push({
            ...newContact,
            connectionStatus: "Connect",
          });
        });
      }
    },
    toggleConnectionStatus(contact) {
      if (contact.connectionStatus === "Connect") {
        contact.connectionStatus = "Pending";
        this.count += 1;
      } else if (contact.connectionStatus === "Pending") {
        contact.connectionStatus = "Connect";
        this.count -= 1;
      }
      this.kopf();
    },
  },
});

app.kopf();
