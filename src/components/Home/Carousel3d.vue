<template>
  <v-container class="primary py-8" fluid>
    <h1
      class="
        d-flex
        justify-center
        display-1
        my-10
        font--text font-weight-medium
      "
    >
      {{ title }}
    </h1>
    <v-divider></v-divider>
    <carousel-3d
      :height="300"
      :width="550"
      :autoplay="true"
      :autoplay-timeout="2000"
    >
      <slide v-for="(card, i) in cards" :index="i" :key="i">
        <img :src="card.src" />
      </slide>
    </carousel-3d>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn
        color="btn white--text"
        class="rounded-0 pa-4 mb-8"
        elevation="5"
        router
        :to="{ name: link }"
      >
        {{ btn }}
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "MES REALISATIONS",
      btn: "Découverte des réalisations",
      link: "Achievements",
    };
  },
  computed: {
    cards() {
      return this.$store.getters.cards;
    },
  },
};
</script>

<style scoped>
#backgroundContainer {
  background-color: #efebe9;
}
</style>