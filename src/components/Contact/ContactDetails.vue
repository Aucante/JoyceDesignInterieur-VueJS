<template>
  <v-container fluid class="primary pb-15 mt-n15">
    <v-container>
      <v-row>
        <v-col
          v-for="(contact, i) in contacts"
          :key="i"
          cols="12"
          md="4"
          lg="4"
          xl="4"
          class="d-flex justify-center"
        >
          <v-container
            class="justify-center px-5"
            color="primary"
            width="400"
            outlined
          >
            <a v-bind:href="contact.href" target="_blank">
              <v-icon
                color="icon"
                size="110"
                class="d-flex justify-center mb-4"
                >{{ contact.icon }}</v-icon
              >
            </a>
            <div>
              <p class="d-flex justify-center headline font-weight-medium">
                {{ contact.title }}
              </p>
            </div>
            <div class="mt-7">
              <p class="d-flex justify-center subtitle-1 font-weight-light">
                {{ contact.content }}
              </p>
            </div>
          </v-container>

          <v-divider
            v-show="contact.divider"
            class="hidden-sm-and-down"
            vertical
          ></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
};
</script>
