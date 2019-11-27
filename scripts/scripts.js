new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    dataLoaded: 0,
    apiData: undefined
  },
  methods: {
    loadApi: function() {
      this.dataLoaded = 0;
      this.$http
        .get("data/data.json")
        .then(this.successCallback, this.errorCallback);
    },
    successCallback: function(response) {
      this.dataLoaded = 1;

      const { data } = response;
      this.apiData = response;
      console.log(this.apiData, "success");
    },
    errorCallback: function(response) {
      this.dataLoaded = 2;

      console.log(response, "error");
    }
  }
});
