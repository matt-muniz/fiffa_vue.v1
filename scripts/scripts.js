new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    showAlert: false
  },
  methods: {
    loadApi: function() {
      this.$http
        .get("http://jsonplaceholder.typicode.com/posts")
        .then(this.successCallback, this.serrorCallback);
    },
    successCallback: function($response, { data }) {
      console.log(response, "success");
    },
    errorCallback: function(response) {
      console.log(response, "error");
    }
  }
});
