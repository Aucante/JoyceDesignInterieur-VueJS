
<template>
<nav>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar 
      extended
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title><v-avatar
                size="110"
                class="mt-10 ml-5"
                >
                <img
                  :src="logo"
                  alt="John"
                >
              </v-avatar></v-toolbar-title>

      <v-spacer></v-spacer>

      
      
       <template v-slot:extension>
        <v-tabs
        align-with-title 
        class="d-flex justify-end mb-5 mr-16" 
        :color="'grey darken-4'" 
        >
          <v-tab 
          v-for="item in items" :key="item.text"
          class="hidden-sm-and-down"
          router :to="{name: item.link}"
          >{{item.text}}</v-tab>
        </v-tabs>
      </template>     
    </v-toolbar>
     
    
  </v-card>
        <v-navigation-drawer v-model="drawer" app width="250">
            <v-list dense class="display-2">
                <v-avatar
                size="110"
                class="ml-16"
                >
                <img
                  :src="logo"
                  alt="John"
                >
              </v-avatar>
                <v-btn
                   color="grey darken-4 white--text"
                   class="d-flex justify-center rounded-0 ml-15 mb-5"
                   elevation="5"
                   @click="drawer = !drawer"
                >
                <v-icon left>
                  mdi-cancel
                </v-icon>
                  Fermer
                </v-btn>
                <v-divider></v-divider>
                <v-subheader class="title ml-4 mb-2">MENU</v-subheader>
                <v-list-item-group color="light">
                    <v-list-item class="goldText" v-for="item in items" :key="item.text" router :to="{name: item.link}">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

</nav>
</template>

<script>

import Logo from './../assets/logo/Logo.png'

export default {
    data () {
        return {
            title: 'JoyceDesignInterieur',
            logo: Logo,
            drawer: false,
            selectedItem: 1,
            items: [
              { text: 'Home', icon: 'mdi-clock', link: 'Home'},
              { text: 'About', icon: 'mdi-account', link: 'About'},
              { text: 'Prestations', icon: 'mdi-flag', link: 'Services'},
              { text: 'Réalisations', icon: 'mdi-folder-multiple', link: 'Achievements'},
              { text: 'Contact', icon: 'mdi-contacts', link: 'Contact'},
            ],
        }
    }

}

</script>

