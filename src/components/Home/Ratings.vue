<template>
  <v-container fluid class="my-16">
      <p
        class="d-flex justify-center display-1 font-weight-medium"
        >AVIS CLIENTS</p>
        <v-divider></v-divider>
      <v-card
        color="white"
        flat
        tile
        >
        <v-window v-model="onboarding">
        <v-window-item
            v-for="(customer, i) in customers"
            :key="i"
            class="py-16"
        >
            <v-card
            color="transparent"
            height="200"
            outlined
            >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
                >
                <v-icon 
                size="50"
                >mdi-account</v-icon>
                <v-card-text class="text-center title">
                {{customer.name}}
                </v-card-text>
                <v-rating
                v-model="rating"
                background-color="blue-grey lighten-1"
                color="blue-grey darken-3"
                small
                ></v-rating>
                <v-card-text class="text-center">
                {{customer.content}}
                </v-card-text>
            </v-row>
            </v-card>
        </v-window-item>
        </v-window>

        <v-card-actions class="justify-center">
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
            v-for="n in length"
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
  export default {
    data: () => ({
      rating: 4,
      customers: [
        {name: 'Lea. J', content: 'Merci pour votre professionnalisme. Je suis très satisfaite d\'avoir fais appel à JoyceDesignInterieur. Je n\'hésiterais pas à refaire appel à vos services. Cordialement'},
        {name: 'Lisa. B', content: 'Merci pour votre professionnalisme. Je suis très satisfaite d\'avoir fais appel à JoyceDesignInterieur.'},
        {name: 'Martine. S', content: 'Merci pour votre professionnalisme. Je suis très satisfaite d\'avoir fais appel à JoyceDesignInterieur.'},
      ]  ,
      length: 3,
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