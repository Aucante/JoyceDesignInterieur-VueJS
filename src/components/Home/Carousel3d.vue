<template>
    
  <v-container id="backgroundContainer" fluid>
      <h1
        class="d-flex justify-center display-1 my-10 font-weight-medium"
        >MES REALISATIONS</h1>
        <v-divider></v-divider>
        <carousel-3d :height="300" :width="550" :border="1" :autoplay="true" :autoplay-timeout='2400'>
            <slide v-for="(card, i) in cards" :index="i" :key="i">
                    <img :src="card.src">
            </slide>
        </carousel-3d>
  </v-container>
</template>

<script>


  export default {
    
    computed: {
        cards() {
            return this.$store.getters.cards;
        }
    
    },
  }
</script>