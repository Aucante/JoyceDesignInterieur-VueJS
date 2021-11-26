<template>
  <v-container id="backgroundContainer" fluid>
    <h1 class="d-flex justify-center display-1 my-10 font-weight-medium">
      MES SERVICES
    </h1>
    <v-divider></v-divider>
    <v-card color="blue-grey lighten-5" flat tile>
      <v-window v-model="onboarding">
        <v-window-item v-for="service in services" :key="service">
          <v-container fluid>
            <v-row>
              <v-col cols="12" xl="10" offset-xl="1">
                <v-container>
                  <v-card
                    color="blue-grey lighten-5"
                    class="d-flex justify-center align-center rounded-lg"
                    height="480"
                    outlined
                    tile
                  >
                    <v-col
                      cols="1"
                      sm="1"
                      md="3"
                      lg="3"
                      xl="3"
                      class="d-flex justify-center"
                    >
                      <div class="d-flex justify-center">
                        <v-avatar
                          class="align-self-center hidden-sm-and-down"
                          size="200"
                        >
                          <img :src="service.avatar" alt="John" />
                        </v-avatar>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="9" lg="9" xl="9">
                      <v-card-text class="justify-center">
                        <p class="d-flex justify-center text-h4">
                          {{ service.title }}
                        </p>
                        <v-divider></v-divider>
                        <div class="d-flex flex-column justify-center mt-5">
                          <v-card-text class="font-weight-medium"
                            ><v-icon>mdi-star-four-points-outline</v-icon>
                            {{ service.content1 }}</v-card-text
                          >
                          <v-card-text class="font-weight-medium"
                            ><v-icon>mdi-star-four-points-outline</v-icon>
                            {{ service.content2 }}</v-card-text
                          >
                          <v-card-text class="font-weight-medium"
                            ><v-icon v-if="service.content3 !== null"
                              >mdi-star-four-points-outline</v-icon
                            >
                            {{ service.content3 }}</v-card-text
                          >
                          <v-card-text class="font-weight-medium"
                            ><v-icon v-if="service.content4 !== null"
                              >mdi-star-four-points-outline</v-icon
                            >
                            {{ service.content4 }}</v-card-text
                          >
                          <v-card-text class="font-weight-medium"
                            ><v-icon v-if="service.content5 !== null"
                              >mdi-star-four-points-outline</v-icon
                            >
                            {{ service.content5 }}</v-card-text
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-card>
                </v-container>
              </v-col>
            </v-row>

            <div class="d-flex justify-center">
              <v-btn
                color="grey darken-4 white--text"
                class="d-flex justify-center rounded-0"
                elevation="5"
              >
                En savoir plus
              </v-btn>
            </div>
          </v-container>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Service1 from "./../../assets/Images/service1.jpg";
import Service2 from "./../../assets/Images/service2.jpg";
import Service3 from "./../../assets/Images/service3.png";
import Service4 from "./../../assets/Images/service4.jpg";

export default {
  data: () => ({
    services: [
      {
        title: "Prestations à la carte",
        avatar: Service1,
        content1: "Shopping list",
        content2: "Planche d'ambiance",
        content3: "Modélisation 3D - pièce simple",
        content4: "Modélisation 3D - pièce technique",
        content5: "Modélisation 3D - pièce multifonctions",
      },
      {
        title: "Prestations au forfait",
        avatar: Service2,
        content1: "Forfait pièce simple",
        content2: "Forfait pièce technique",
        content3: "Forfait pièce multifonctions",
        content4: null,
        content5: null,
      },
      {
        title: "Option 3D - (Prestations à la carte)",
        avatar: Service3,
        content1: "Plan d'aménagement 3D",
        content2: "Rendu 360°",
        content3: null,
        content4: null,
        content5: null,
      },
      {
        title: "Option 3D - (Prestation au forfait)",
        avatar: Service4,
        content1: "3D version supplémentaire pièce simple",
        content2: "3D version supplémentaire pièce technique",
        content3: "3D version supplémentaire pièce multifonctions",
        content4: null,
        content5: null,
      },
    ],
    length: 4,
    onboarding: 0,
  }),

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

<style scoped>
#backgroundContainer {
  background-color: #eceff1;
}
</style>