<template>
  <v-container fluid>
    <v-row class="my-10 py-10">
      <v-col cols="12">
        <v-container fluid>
          <p
            class="
              d-flex
              justify-center
              display-1
              font--text font-weight-medium
            "
          >
            {{ title }}
          </p>
          <v-divider></v-divider>
          <v-icon
            color="icon"
            size="90"
            class="d-flex justify-center mt-4 mb-n7"
            >{{ mdi }}</v-icon
          >
          <v-row>
            <v-col cols="12">
              <v-container>
                <div class="d-flex justify-center my-7">
                  <p>{{ content }}</p>
                </div>
              </v-container>
            </v-col>
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
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "CONTACT",
      content: "Un projet déco ? Echangeons ensemble !",
      btn: "Prise de contact",
      mdi: "mdi-clock-time-nine-outline",
      link: "Contact",
    };
  },
};
</script>

<style scoped>
#backgroundContainer {
  background-color: #efebe9;
}
</style>