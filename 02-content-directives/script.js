Vue.createApp({
  data() {
    return {
      vueVersion: 3,
      text: "<p>Direktiven sind spezielle Attribute mit dem Präfix <code>v-</code>. Der Wert eines Direktiv-Attributs wird erwartet, <strong>ein einzelner JavaScript-Ausdruck</strong> zu sein (mit Ausnahme von <code>v-for</code> und <code>v-on</code>, die später besprochen werden). Die Aufgabe einer Direktive besteht darin, reaktiv Seiteneffekte auf den DOM anzuwenden, wenn sich der Wert ihres Ausdrucks ändert. Lassen Sie uns das Beispiel aus der Einführung überprüfen:</p>",
      myDataProperty: "Dies ist meine Datenproperty.",
    };
  },
  mounted() {
    setInterval(() => {
      this.vueVersion++;
    }, 2000);
  },
}).mount("#app");
