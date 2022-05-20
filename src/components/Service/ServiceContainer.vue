<template>
  <v-container v-if="product.position == 'left'" fluid class="primary pa-15">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        class="d-flex justify-center"
      >
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <v-card
              class="d-flex align-center mx-auto mt-10 transparent"
              outlined
            >
              <v-card-text>
                <div class="d-flex justify-start display-3 circular--text py-5">
                  {{ product.content }}
                </div>
                <div class="d-flex justify-start circular--text title">
                  {{ product.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn
              color="circular white--text"
              class="rounded-0 pa-4 mb-15"
              router
              :to="{ name: 'Contact' }"
            >
              {{ btnText }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        class="d-flex align-center justify-center"
      >
        <v-img
          class="white--text align-end"
          :src="product.image"
          :aspect-ratio="16 / 9"
          width="800"
          height="400"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else fluid class="pa-15">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        class="d-flex align-center justify-center"
      >
        <v-img
          class="secondary--text align-end heightImage"
          :src="product.image"
          :aspect-ratio="16 / 9"
          width="800"
          height="400"
        >
        </v-img>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        class="d-flex justify-center"
      >
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <v-card
              class="d-flex align-center mx-auto mt-10 transparent"
              outlined
            >
              <v-card-text class="circular--text">
                <div class="d-flex justify-start display-3 py-5">
                  {{ product.content }}
                </div>
                <div class="d-flex justify-start title pt-4">
                  {{ product.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn
              color="circular white--text"
              class="rounded-0 pa-4 mb-8"
              router
              :to="{ name: 'Contact' }"
            >
              {{ btnText }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    service: Object,
    product: Object,
  },
  data() {
    return {
      btnText: "Contact",
    };
  },
};
</script>