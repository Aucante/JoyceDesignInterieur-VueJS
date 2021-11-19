<template>
  <v-container fluid id="backgroundContainer" class="py-10">
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
        <v-card color="brown lighten-5" class="mx-auto" outlined>
          <v-img class="white--text align-end" height="200px" :src="image">
          </v-img>
          <v-card-text class="text--primary">
            <div class="d-flex justify-center display-1 mt-5">{{ title }}</div>
          </v-card-text>
          <v-card-actions class="d-flex justify-center"> </v-card-actions>
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
      title: "NOS PRESTATIONS",
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
  background-color: #EFEBE9;
}
</style>