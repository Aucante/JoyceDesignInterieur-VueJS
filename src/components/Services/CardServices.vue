<template>
  <v-container fluid class="hero">
    <v-row>
      <v-col
        cols="12"
        md="8"
        lg="8"
        xl="8"
        offset-md="2"
        offset-lg="2"
        offset-xl="2"
        class="d-flex justify-center"
      >
        <v-card color="transparent" class="mx-auto" outlined>
          <v-card-text class="text--primary">
            <div class="d-flex justify-center display-2 mt-5 white--text">
              {{ title }}
            </div>
          </v-card-text>
          <v-card-text class="text--primary">
            <div class="d-flex justify-center title mt-5 white--text">
              {{ subtitle }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image: require("./../../assets/Images/image7xl.jpg"),
      title: "PRESTATIONS",
      subtitle: "Retrouvez toutes nos prestations",
    };
  },
  computed: {
    services() {
      return this.$store.getters.servicesWhithoutOption;
    },
  },
};
</script>

<style scoped>
#backgroundContainer {
  background-color: #efebe9;
}
.hero {
  background-size: cover;
  height: auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("./../../assets/Images/image7xl.jpg");
}
</style>