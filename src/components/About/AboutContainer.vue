<template>
  <v-container>
    <p
      class="
        d-flex
        justify-center
        display-1
        my-8
        font--text
        font-weight-medium
      "
    >
      {{ title }}
    </p>
    <v-divider></v-divider>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="8"
        lg="8"
        xl="8"
        class="d-flex justify-center"
      >
        <v-container class="d-flex justify-center">
          <v-row>
            <v-col cols="12" class="d-flex justify-center align-center">
              <div>
                <h1
                  class="d-flex justify-center my-4 headline font--text font-weight-medium"
                >
                  {{subtitle}}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  cupiditate voluptate debitis esse tempore unde consectetur
                  voluptatem sequi et eum, animi error nemo perspiciatis! Esse
                  sunt quo expedita ipsum facilis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  cupiditate voluptate debitis esse tempore unde consectetur
                  voluptatem sequi et eum, animi error nemo perspiciatis! Esse
                  sunt quo expedita ipsum facilis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  cupiditate voluptate debitis esse tempore unde consectetur
                  voluptatem sequi et eum, animi error nemo perspiciatis! Esse
                  sunt quo expedita ipsum facilis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  cupiditate voluptate debitis esse tempore unde consectetur
                  voluptatem sequi et eum, animi error nemo perspiciatis! Esse
                  sunt quo expedita ipsum facilis.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4" xl="4">
        <v-container>
          <v-img height="400" class="my-8" :src="src"></v-img>
        </v-container>
      </v-col>
    </v-row>
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
import Image from "./../../assets/Images/work1.jpg";

export default {
  data() {
    return {
      title: "PRESENTATION",
      subtitle: "JoyceDesignInterieur",
      btn: "Contactez-moi",
      src: Image,
      link: "Contact",
    };
  },
};
</script>
