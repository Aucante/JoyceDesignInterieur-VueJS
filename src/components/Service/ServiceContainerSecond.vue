<template>
  <v-container fluid class="primary px-15">
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="4"
        lg="4"
        xl="4"
        class="d-flex justify-center"
      >
        <v-container>
          <v-img class="white--text align-end" :src="service.productImage2">
          </v-img>
        </v-container>
      </v-col>
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
              <v-card-text class="secondary--text">
                <div class="d-flex justify-center display-1 py-5">
                  {{ service.content2 }}
                </div>
                <div class="d-flex justify-center">
                  {{ service.description2 }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn
              color="secondary primary--text"
              class="rounded-0 pa-4 mb-8"
              router
              :to="{ name: 'Contact' }"
            >
              Contactez-moi
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["service"],
};
</script>