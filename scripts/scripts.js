new Vue({
  el: "#app",
  data: {
    someText: "I need a beer"
  },
  computed: {
    putHello: function() {
      return this.someText
        .split("")
        .reverse()
        .join("");
    }
  }
});
