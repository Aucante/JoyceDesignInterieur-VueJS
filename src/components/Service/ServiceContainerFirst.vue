<template>
  <v-container fluid class="circular btnSmall px-15">
    <v-row>
      <v-col
        cols="12"
        sm="8"
        md="8"
        lg="8"
        xl="8"
        class="d-flex justify-center"
      >
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <v-card
              class="d-flex align-start mx-auto transparent"
              width="800"
              outlined
            >
              <v-card-text class="primary--text">
                <div class="d-flex justify-center display-1 py-5">
                  {{ service.product.content[1] }}
                </div>
                <div class="d-flex justify-center">
                  {{ service.description1 }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn
              color="btnSmall secondary--text"
              class="rounded-0 pa-4 mb-8"
              router
              :to="{ name: 'Contact' }"
            >
              Contactez-moi
            </v-btn>
          </v-col>
        </v-row>
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
          <v-img class="white--text align-end" :src="service.productImage1">
          </v-img>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["service"],
};
</script>

<style scoped>
.hero {
  background-size: cover;
  height: auto;
  background-image: linear-gradient(rgba(0, 0, 0, 4), rgba(0, 0, 0, 0.8)),
    url("./../../assets/Images/Background/back1.jpg");
}
</style>