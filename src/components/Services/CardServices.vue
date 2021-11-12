<template>
    <v-container 
    fluid
    class="my-10"
    >  
            <v-row>
                <v-col
                v-for="(service, i) in services"
                :key="i"
                cols="12"
                lg="6"
                xl="6"
                class="d-flex justify-center"
                >
                <v-card
                    class="mx-auto"
                    elevation="15"
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="service.image"
                    >
                    </v-img>
                    <v-card-text class="text--primary">
                    <div
                    class="d-flex justify-center display-1"
                    >{{service.title}}</div>
                    </v-card-text>
                    <v-card-actions
                    class="d-flex justify-center"
                    >
                    <v-btn
                    color="grey darken-4 white--text"
                    class="rounded-0 pa-4 mt-n4"
                    elevation="5"
                    >
                    {{btn}}
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>

  export default {
      data() {
          return {
          btn: 'Découvrir'
          }
      },
      computed: {
          services() {
              return this.$store.getters.servicesWhithoutOption
          }
      }


  }
</script>