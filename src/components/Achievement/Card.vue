<template>
  <v-container id="backgroundContainer" fluid class="py-10">
    <v-row>
      <v-col
        cols="12"
        md="8"
        lg="4"
        xl="4"
        offset-md="2"
        offset-lg="4"
        offset-xl="4"
        class="d-flex justify-center"
      >
        <v-card class="mx-auto rounded-0 primary" elevation="5">
          <v-img class="white--text align-end" height="200px" :src="card.src">
          </v-img>
          <v-card-text class="text--primary">
            <div class="d-flex justify-center display-1 mt-5">
              {{ card.title }}
            </div>
          </v-card-text>
          <v-card-actions class="d-flex justify-center"> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
};
</script>

