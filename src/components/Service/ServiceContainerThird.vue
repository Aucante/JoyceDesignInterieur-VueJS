<template>
  <v-container fluid class="hero px-15">
    <v-row>
      <v-col
        cols="12"
        sm="8"
        md="8"
        lg="8"
        xl="8"
        class="d-flex justify-center"
      >
        <v-card
          class="d-flex align-start mx-auto transparent"
          width="800"
          outlined
        >
          <v-card-text class="white--text">
            <div class="d-flex justify-center display-1 py-5">
              {{ service.content3 }}
            </div>
            <div class="d-flex justify-center">
              {{ service.description3 }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="4"
        lg="4"
        xl="4"
        class="d-flex justify-center"
      >
        <v-container>
          <v-img class="white--text align-end" :src="service.productImage3">
          </v-img>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Image1 from "./../../assets/Images/plan/plan1.png";

export default {
  props: ["service"],
  data() {
    return {
      Image: Image1,
    };
  },
};
</script>

<style scoped>
.hero {
  background-size: cover;
  height: auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("./../../assets/Images/Background/back2.jpg");
}
</style>

