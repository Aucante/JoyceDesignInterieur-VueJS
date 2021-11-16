<template>
  <div class="achievement">
    <v-container 
    id="backgroundContainer"
    fluid
    class="py-10"
    >  
            <v-row>
                <v-col
                cols="12"
                md="8"
                lg="6"
                xl="6"
                offset-md="2"
                offset-lg="3"
                offset-xl="3"
                class="d-flex justify-center"
                >
                <v-card
                    class="mx-auto rounded-0"
                    elevation="15"
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="card.src"
                    >
                    </v-img>
                    <v-card-text class="text--primary">
                    <div
                    class="d-flex justify-center display-1 mt-5"
                    >{{card.title}}</div>
                    </v-card-text>
                    <v-card-actions
                    class="d-flex justify-center"
                    >
                    
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-container>
        <p
        class="d-flex justify-center body-1 my-8"
        >{{card.description}}</p>
        </v-container>
        <v-divider></v-divider>
        <v-container
        class="my-10"
        >
          <v-row>
            <v-col
            cols="12"
            md="8"
            lg="8"
            xl="6"
            offset-md="2"
            offset-lg="2"
            offset-xl="3"
            >
              <v-carousel 
              v-model="model"
              delimiter-icon="mdi-minus"
              >
                <v-carousel-item
                  v-for="c in card.plan"
                  :key="c"
                  :src="c"
                >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                    </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-container
        class="my-10"
        >
          <v-row>
          <v-col
            v-for="c in card.plan"
            :key="c"
            class="d-flex child-flex"
            cols="4"
            sm="3"
            md="3"
            lg="2"
            xl="2"
          >
            <v-img
              :src="c"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
        </v-container>
    <Footer />
  </div>
</template>

<script>
import Card from '@/components/Achievement/Card'
import CarouselAchievement from '@/components/Achievement/CarouselAchievement'
import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'

export default {
  name: 'Achievement',
  data: () => ({
      model: 0,
    }),
  components: {
    Card,
    CarouselAchievement,
    Footer,
    Toolbar
  },
        props: ['id'],
       
        created() {
            this.$store.commit('setCurrentCardVersionMutation', this.id);
        },
        
        computed: {
            card: function() {
                console.log(this.$store.getters.getCurrentCard)
                return this.$store.getters.getCurrentCard;
            },
            
        }
}
</script>

<style scoped>
#backgroundContainer {
background-color: #ECEFF1
;
}
</style>