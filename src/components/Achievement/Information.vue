<template>
  <v-container fluid class="primary">
    <v-row>
      <v-col cols="12">
        <v-container>
          <v-row>
            <v-col cols="4">
              <p
                class="d-flex justify-center title my-8 custom-transform-class"
              >
                {{ card.style }}
              </p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="4">
              <p
                class="d-flex justify-center title my-8 custom-transform-class"
              >
                {{ card.ambiance }}
              </p>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="4">
              <p
                class="d-flex justify-center title my-8 custom-transform-class"
              >
                {{ card.decoration }}
              </p>
            </v-col>
          </v-row>
          <p class="d-flex justify-center body-1 pt-15">
            {{ card.description }}
          </p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style lang="sass">
.custom-transform-class
  text-transform: uppercase
</style>
