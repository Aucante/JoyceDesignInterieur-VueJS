<template>
    
  <v-container id="backgroundContainer" fluid>
      <h1
        class="d-flex justify-center display-1 my-10 font-weight-medium"
        >MES REALISATIONS</h1>
        <v-divider></v-divider>
      <v-card
            flat
            tile
            class="blue-grey lighten-5
"
        >
            <v-window v-model="onboarding">
            <v-window-item
                v-for="card in cards" 
                :key="card"
            >
                <v-hover v-slot="{ hover }">
                        <v-card
                            elevation="14"
                            class="mx-auto my-8 rounded-0"
                            max-width="400"
                        >
                            <v-img
                            class="white--text align-end"
                            height="200px"
                            :src="card.src"
                            >
                            
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out yellow accent-3 v-card--reveal"
                                style="height: 100%;"
                            >
                                <v-btn
                                    color="grey darken-4 white--text"
                                    class="rounded-0 pa-10 headline"
                                    elevation="5"
                                    x-large
                                >
                                    Découvrir
                                </v-btn>
                            </div>
                            </v-expand-transition>
                            </v-img>

                            <v-card-text class="text--primary">
                            <div class="display-1">{{card.title}}</div>
                            <div class="body-1 font-weight-light mt-4">{{card.content}}</div>
                            </v-card-text>

                            <v-card-actions>
                            

                            <v-btn
                                color="grey darken-4 white--text"
                                class="rounded-0 pa-4"
                                elevation="5"
                            >
                                Découvrir
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-hover>
            </v-window-item>
            </v-window>

            <v-card-actions class="justify-space-between">
            <v-btn
                text
                @click="prev"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-item-group
                v-model="onboarding"
                class="text-center"
                mandatory
            >
                <v-item
                v-for="n in cards.length"
                :key="`btn-${n}`"
                v-slot="{ active, toggle }"
                >
                <v-btn
                    :input-value="active"
                    icon
                    @click="toggle"
                >
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
                </v-item>
            </v-item-group>
            <v-btn
                text
                @click="next"
            >
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
  </v-container>
</template>

<script>
import Image1 from './../../assets/Images/image1.jpg'
import Image2 from './../../assets/Images/image2.jpg'
import Image3 from './../../assets/Images/image3.jpg'
import Image4 from './../../assets/Images/image4.jpg'
import Image5 from './../../assets/Images/image5.jpg'
import Image6 from './../../assets/Images/image6.jpg'
import Image7 from './../../assets/Images/image7.jpg'

  export default {
    data: () => ({
      cards: [
                  {title: 'Projet Palermo', content: 'Ambiance sicilienne', src: Image1},
                  {title: 'Projet Florencia', content: 'Ambiance toscane', src: Image2},
                  {title: 'Projet Cagliari', content: 'Voyage en sardaigne', src: Image4},
                  {title: 'Projet Milano', content: 'Voyage en lombardie', src: Image5},
                  {title: 'Projet Lazio', content: 'Ambiance romaine', src: Image6},
                  {title: 'Projet Napoli', content: 'Ambiance napolitaine', src: Image7}
              ],
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }
</script>

<style scoped>
#backgroundContainer {
    background-color: #ECEFF1;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>