<template>
  <v-container class="my-12">
    <p
      class="d-flex justify-center display-1 my-8 font--text font-weight-medium"
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
                  class="
                    d-flex
                    justify-center
                    my-12
                    headline
                    font--text font-weight-medium
                  "
                >
                  {{ subtitle }}
                </h1>
                <p>
                  {{ content }}
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
  </v-container>
</template>

<script>
import Image from "./../../assets/Images/Images Services/shu3.jpg";

export default {
  data() {
    return {
      title: "CONTACT",
      subtitle: "Vous souhaitez réaliser votre projet ?",
      content: "Echangeons ensemble !",
      src: Image,
    };
  },
};
</script>