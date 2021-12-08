<template>
  <v-container fluid class="primary pa-10">
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
            <v-row class="fill-height ma-0" align="center" justify="center">
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
</template>

<script>
export default {
  props: ["card"],
};
</script>