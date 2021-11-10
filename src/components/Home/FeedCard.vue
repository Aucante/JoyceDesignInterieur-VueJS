<template>
    <v-container fluid>
        <h1
        class="d-flex justify-center display-1 ma-8 font-weight-medium"
        >MES PROJETS</h1>
        <v-divider></v-divider>
        <v-row>
            <v-col
            cols="12"
            md="6"
            lg="4"
            xl="4"
            v-for="card in cards" :key="card"
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
                <v-divider></v-divider>
            </v-col>
        </v-row>
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
      
      data() {
          return {
              
              cards: [
                  {title: 'Projet Palermo', content: 'Ambiance sicilienne', src: Image1},
                  {title: 'Projet Florencia', content: 'Ambiance toscane', src: Image2},
                  {title: 'Projet Cagliari', content: 'Voyage en sardaigne', src: Image4},
                  {title: 'Projet Milano', content: 'Voyage en lombardie', src: Image5},
                  {title: 'Projet Lazio', content: 'Ambiance romaine', src: Image6},
                  {title: 'Projet Napoli', content: 'Ambiance napolitaine', src: Image7}
              ]
          }
      }


  }
</script>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>