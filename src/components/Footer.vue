<template>
  <v-footer dark padless class="d-flex justify-center grey darken-4">
    <v-card flat tile class="grey darken-4 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <a v-bind:href="icon.link" style="text-decoration: none">
            <v-icon size="48px">
              {{ icon.mdi }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>JoyceInteriorDesigner</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        mdi: "mdi-linkedin",
        link: "https://www.instagram.com/joyceinteriordesigner/",
      },
      {
        mdi: "mdi-instagram",
        link: "https://www.instagram.com/joyceinteriordesigner/",
      },
      {
        mdi: "mdi-email-check-outline",
        link: "mailto:joycedesignsinterieur@gmail.com",
      },
    ],
  }),
};
</script>

