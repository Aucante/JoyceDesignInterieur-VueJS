<template>
    
            <v-carousel
            cycle
            height="440"
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
                  cols="10"
                  sm="5"
                  md="5"
                  lg="5"
                  xl="5"
                  class="d-flex justify-start"
                >
                  <v-container class="d-flex justify-center fill-height ml-10 mt-16">
                <v-responsive
                  class="d-flex align-center mx-auto mt-10"
                  height="100%"
                  max-width="700"
                  width="100%"
                >
                  <base-body
                    class="display-1 white--text"
                  >
                   {{slide.content}} 
                  </base-body>
                  
                  <v-row>
                    <v-btn
                      large
                      class="mt-7 ml-4 px-10  rounded-0 white black--text"
                    >
                      {{slide.btn}}
                    </v-btn>
                  </v-row>
                  

                </v-responsive>
              </v-container>
                </v-col>
              </v-row>
              
                
            
            </v-carousel-item>
    </v-carousel>
       
       
</template>

<script>
import Image1 from './../../assets/Images/image5xl.jpg'
import Image2 from './../../assets/Images/image4xl.jpg'
import Image3 from './../../assets/Images/image10xl.jpg'

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
            src: Image1, content: 'SUBLIMEZ VOTRE INTERIEUR', colorText: 'white', btn: 'Découvrir'
          },
          {
            src: Image2, content: 'DECOUVREZ NOS REALISATIONS', colorText: 'white', btn: 'Découvrir'
          },
          {
            src: Image3, content: 'PRISE DE CONTACT', colorText: 'blue-grey darken-4', btn: 'Contact'
          },
        ],
      }
    },
  }
</script>