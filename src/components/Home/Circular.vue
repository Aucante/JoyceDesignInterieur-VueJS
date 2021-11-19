<template>
  <v-container fluid class="circular py-14">
    <v-row>
      <v-col
        v-for="(asset, i) in assets"
        :key="i"
        cols="12"
        md="6"
        lg="3"
        xl="3"
        class="d-flex justify-center"
      >
        <v-card class="justify-center" color="circular" outlined>
          <v-progress-circular
            :rotate="270"
            :size="140"
            :width="5"
            :value="asset.rating"
            color="white"
          >
            <div class="display-1">{{ asset.rating }}</div>
          </v-progress-circular>
          <p class="d-flex justify-center title white--text font-weight-light">
            {{ asset.title }}
          </p>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      assets: [
        { title: "Villes visitées", rating: 47 },
        { title: "Pays traversés", rating: 14 },
        { title: "Projets réalisés", rating: 27 },
        { title: "m2 réalisés", rating: 803 },
      ],
    };
  },
};
</script>