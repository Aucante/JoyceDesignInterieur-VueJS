<template>
  <v-container fluid class="py-10">
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
        <v-carousel v-model="model" delimiter-icon="mdi-minus">
          <v-carousel-item v-for="c in card.plan" :key="c" :src="c">
            <v-row class="fill-height" align="center" justify="center"> </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["card"],
};
</script>
