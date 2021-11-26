<template>
  <div class="achievement">
    <Card v-bind:card="card" />
    <Information v-bind:card="card" />
    <v-divider></v-divider>
    <CarouselAchievement v-bind:card="card" />
    <Gallery v-bind:card="card" />
    <Footer />
  </div>
</template>

<script>
import Card from "@/components/Achievement/Card";
import Information from "@/components/Achievement/Information";
import CarouselAchievement from "@/components/Achievement/CarouselAchievement";
import Gallery from "@/components/Achievement/Gallery";
import Toolbar from "@/components/Toolbar";
import Footer from "@/components/Footer";

export default {
  name: "Achievement",
  components: {
    Card,
    Information,
    CarouselAchievement,
    Gallery,
    Footer,
    Toolbar,
  },
  props: ["id"],

  created() {
    this.$store.commit("setCurrentCardVersionMutation", this.id);
  },

  computed: {
    card: function () {
      console.log(this.$store.getters.getCurrentCard);
      return this.$store.getters.getCurrentCard;
    },
  },
};
</script>

