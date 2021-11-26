
<template>
  <nav>
    <v-card color="grey lighten-1" flat tile>
      <v-toolbar extended>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>

        <v-toolbar-title
          ><v-avatar size="110" class="mt-10 ml-5">
            <img :src="logo" alt="John" /> </v-avatar
        ></v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs
            align-with-title
            class="d-flex justify-end mb-5 mr-16"
            :color="'font'"
          >
            <v-tab
              v-for="item in itemsNavigation"
              :key="item.title"
              class="hidden-sm-and-down font--text"
              router
              :to="{ name: item.link }"
              >{{ item.title }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="drawer" app width="250">
      <v-list dense class="display-2">
        <v-avatar size="110" class="ml-16">
          <img :src="logo" alt="John" />
        </v-avatar>
        <v-btn
          color="btn white--text"
          class="d-flex justify-center rounded-0 ml-15 mb-5"
          elevation="5"
          @click="drawer = !drawer"
        >
          <v-icon left> mdi-cancel </v-icon>
          Fermer
        </v-btn>
        <v-divider></v-divider>

        <v-list
          v-for="item in itemsNavigation"
          :key="item.title"
          router
          :to="{ name: item.link }"
        >
          <v-list-item
            v-if="item.list == false"
            router
            :to="{ name: item.link }"
          >
            <v-list-item-icon>
              <v-icon color="icon" v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-title class="font--text" v-text="item.title">
            </v-list-item-title>
          </v-list-item>

          <v-list-group v-if="item.list == true" color="light" :value="false">
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon color="icon" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title class="font--text" v-text="item.title">
              </v-list-item-title>
            </template>
            <v-list-item
              v-for="(service, i) in services"
              :key="i"
              link
              router
              :to="{ name: item.link }"
            >
              <v-list-item-icon>
                <v-icon class="ml-1" color="icon" size="15"
                  >mdi-square-medium</v-icon
                >
              </v-list-item-icon>
              <v-list-item-title
                class="font--text"
                v-text="service.title"
              ></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Logo from "./../assets/logo/Logo.png";

export default {
  data() {
    return {
      title: "JoyceDesignInterieur",
      logo: Logo,
      drawer: false,
      selectedItem: 1,
      itemsNavigation: [
        { title: "Home", icon: "mdi-clock", link: "Home", list: false },
        {
          title: "Presentation",
          icon: "mdi-account",
          link: "About",
          list: false,
        },
        {
          title: "Réalisations",
          icon: "mdi-folder-multiple",
          link: "Achievements",
          list: false,
        },
        {
          title: "Prestations",
          icon: "mdi-flag",
          link: "Services",
          list: true,
        },
        {
          title: "Contact",
          icon: "mdi-contacts",
          link: "Contact",
          list: false,
        },
      ],
    };
  },
  computed: {
    services: function () {
      return this.$store.getters.services;
    },
  },
};
</script>

