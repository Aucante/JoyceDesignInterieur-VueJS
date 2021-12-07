<template>
  <v-container>
    <v-container fluid>
      <h1
        class="
          d-flex
          justify-center
          display-1
          ma-8
          font--text font-weight-medium
        "
      >
        {{ title }}
      </h1>
      <v-divider></v-divider>
      <v-row>
        <v-col v-for="(service, i) in services" :key="i" cols="12" md="6">
          <v-container>
            <v-icon
              color="icon"
              size="90"
              class="d-flex justify-center mb-10"
              >{{ service.mdi }}</v-icon
            >
            <p
              class="
                d-flex
                justify-center
                display-1
                font--text font-weight-medium
                mb-5
              "
            >
              {{ service.title }}
            </p>
            <v-divider></v-divider>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn
                small
                color="icon white--text font-weight-bold"
                class="mt-5 rounded-0"
                elevation="3"
                router
                :to="{ name: 'Service', params: { id: service.id } }"
              >
                {{ btn }}
              </v-btn>
            </v-col>
            <v-container class="mt-5">
              <v-row>
                <v-col cols="12">
                  <v-expansion-panels accordion>
                    <v-expansion-panel
                      v-for="(product, i) in service.products"
                      :key="i"
                    >
                      <v-expansion-panel-header
                        v-if="service.price != null"
                        class="body-1 font-weight-bold"
                      >
                        {{ product.content }}
                        <v-spacer></v-spacer>
                        {{ product.price }}€
                      </v-expansion-panel-header>
                      <v-expansion-panel-header
                        v-else
                        class="body-1 font-weight-bold"
                      >
                        {{ product.content }}
                        <v-spacer></v-spacer>
                        {{ product.price }}
                      </v-expansion-panel-header>
                      <v-expansion-panel-content class="pa-4">
                        {{ product.description }}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "PRESTATIONS",
      btn: "En savoir plus",
    };
  },
  computed: {
    services() {
      return this.$store.getters.services;
    },
  },
};
</script>
