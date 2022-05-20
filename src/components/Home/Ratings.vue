<template>
  <v-container fluid class="py-16 primary">
    <p class="d-flex justify-center display-1 font--text font-weight-medium">
      {{ title }}
    </p>
    <v-divider></v-divider>
    <v-card flat tile class="primary">
      <v-window v-model="onboarding">
        <v-window-item
          v-for="(customer, i) in customers"
          :key="i"
          class="py-16"
        >
          <v-card color="primary" height="200" outlined>
            <v-row class="fill-height" align="center" justify="center">
              <v-icon color="icon" size="50">{{ mdi }}</v-icon>
              <v-card-text class="text-center title font--text">
                {{ customer.name }}
              </v-card-text>
              <v-rating
                v-model="customer.rating"
                background-color="blue-grey lighten-1"
                color="icon"
                small
              ></v-rating>
              <v-card-text class="text-center">
                {{ customer.content }}
              </v-card-text>
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-center">
        <v-btn color="icon" text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn color="icon" :input-value="active" icon @click="toggle">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn color="icon" text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "AVIS CLIENTS",
    length: 5,
    onboarding: 0,
    mdi: "mdi-account",
  }),
  computed: {
    customers() {
      return this.$store.getters.customers;
    },
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
  },
};
</script>

