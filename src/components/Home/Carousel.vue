<template>
    
            <v-carousel
            cycle
            height="400"
            show-arrows-on-hover
            delimiter-icon="mdi-minus"
            >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
              :src="slide"
            >
              <v-row>
                <v-col
                  cols="12"
                  align="start"
                  sm="4"
                  md="4"
                  lg="3"
                  xl="3"
                  offset="1"
                >
                  <v-container class="fill-height">
                <v-responsive
                  class="d-flex align-start mx-auto mt-10"
                  height="100%"
                  max-width="700"
                  width="100%"
                >
                  <base-subheading
                    size="text-h2" 
                    weight="regular"
                    title="TEST"
                  />
                  <base-heading
                    size="text-h2"
                    title="WELCOME TO ZERO"
                    weight="medium"
                  />
                  <base-body
                    class="display-1 white--text"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  </base-body>
                  
                    <v-btn
                      large
                      class="mt-5 pa-5 rounded-0 black white--text"
                    >
                      ENTER HOME
                    </v-btn>
                  

                </v-responsive>
              </v-container>
                </v-col>
              </v-row>
              
                
            
            </v-carousel-item>
    </v-carousel>
       
       
</template>

<script>
import Image1 from './../../assets/Images/dining-room-gb5dbd9872_1280.jpg'
import Image2 from './../../assets/Images/furniture-g3b934f1e3_1280.jpg'
import Image3 from './../../assets/Images/home-g31af290ab_1280.jpg'

  export default {
    data () {
      return {
        Image: Image,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          {
            src: Image1,
          },
          {
            src: Image2,
          },
          {
            src: Image3,
          },
        ],
      }
    },
  }
</script>