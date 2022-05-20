<template>
  <v-carousel
    cycle
    height="700"
    show-arrows-on-hover
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide"
      gradient="to top left, rgba(100,115,201,.1), rgba(0,0,0,.9)"
    >
      <v-row>
        <v-col
          cols="10"
          sm="5"
          md="5"
          lg="5"
          xl="5"
          class="d-flex justify-start"
        >
          <v-container class="d-flex justify-center fill-height ml-10 mt-16">
            <v-responsive
              class="d-flex align-center mx-auto mt-10"
              height="100%"
              max-width="700"
              width="100%"
            >
              <base-body class="display-1 white--text">
                {{ slide.content }}
              </base-body>

              <v-row>
                <v-btn
                  large
                  class="
                    mt-7
                    ml-4
                    px-10
                    rounded-0
                    white
                    font--text font-weight-bold
                  "
                  router
                  :to="{ name: slide.link }"
                >
                  {{ slide.btn }}
                </v-btn>
              </v-row>
            </v-responsive>
          </v-container>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Image2 from "./../../assets/Images/Images Services/s1.jpg";
import Image3 from "./../../assets/Images/Images Services/s2.jpg";

export default {
  data() {
    return {
      Image: Image,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        {
          src: require("./../../assets/Images/Images Services/s3.jpg"),
          content: "SUBLIMEZ VOTRE INTERIEUR",
          colorText: "white",
          btn: "Découvrir",
          link: "Achievements",
        },
        {
          src: Image2,
          content: "DECOUVREZ NOS REALISATIONS",
          colorText: "white",
          btn: "Découvrir",
          link: "Achievements",
        },
        {
          src: Image3,
          content: "PRISE DE CONTACT",
          colorText: "blue-grey darken-4",
          btn: "Contact",
          link: "Contact",
        },
      ],
    };
  },
};
</script>
