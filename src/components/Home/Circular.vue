<template>
  <v-container fluid id="backgroundContainer">
    <v-row>
      <v-col
      v-for="(asset, i) in assets"
      :key="i"
        cols="12"
        md="3"
        lg="3"
        xl="3"
        class="d-flex justify-center"
      >
      <v-card 
      class="justify-center"
      color="blue-grey darken-2"
      outlined
      >
        <v-progress-circular
        :rotate="360"
        :size="140"
        :width="15"
        :value="value"
        color="white"
      >
        {{ value }} %
      </v-progress-circular>
      <p class="d-flex justify-center title white--text font-weight-light">{{ asset.title }}</p>
      <v-divider></v-divider>
      </v-card>
      

    
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        assets: [
          {title: 'Analyse', rating: 90},
          {title: 'Accompagnement', rating: 80},
          {title: 'Expertise', rating: 70},
          {title: 'Satisfaction', rating: 90},
        ],
        interval: {},
        value: 0,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
     mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 100)
        }
        this.value += 1
      }, 100)
    },
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
#backgroundContainer {
  background-color: #455A64;
}
</style>
