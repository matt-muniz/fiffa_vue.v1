new Vue({
  el: "#app",
  data: {
    someText: "I need a beer",
    counter: 0
  },
  methods: {
    callonClick: function(event, someArg) {
      this.counter++;
      console.log(someArg, event);
    }
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
