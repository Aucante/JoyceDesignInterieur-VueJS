<template>
  <v-container fluid id="backgroundContainer">
    <v-row>
      <v-col cols="12">
        <v-container fluid>
          <p
            class="
              d-flex
              justify-center
              display-1
              my-8
              font-weight-medium
              font--text
            "
          >
            {{ title }}
          </p>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="8" offset="2" class="d-flex justify-center">
              <v-container>
                <div class="my-7">
                  <p v-for="n in length" :key="n">{{ content }}</p>
                </div>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "PRESENTATION",
      btn: "Plus d'informations",
      link: "About",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fugiat facere quam vitae? Quisquam harum nulla odit fuga consequuntur atque. Suscipit rerum voluptatibus minima obcaecati distinctio fuga harum omnis blanditiis!",
      length: 3,
    };
  },
};
</script>

<style scoped>
#backgroundContainer {
  background-color: white;
}
</style>