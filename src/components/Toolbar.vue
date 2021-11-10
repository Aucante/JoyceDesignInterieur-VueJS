
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
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>JoyceDesignInterieur</v-toolbar-title>

      <v-spacer></v-spacer>

      
      
       <template v-slot:extension>
        <v-tabs align-with-title class="d-flex justify-end mb-5 mr-16" :color="'grey darken-4'" >
          <v-tab>Home</v-tab>
          <v-tab>About</v-tab>
          <v-tab class="hidden-sm-and-down">Nouveau</v-tab>
        </v-tabs>
      </template>     
    </v-toolbar>
     
    
  </v-card>
        <v-navigation-drawer v-model="drawer" app width="70%">
            <v-list dense class="display-2">
                <v-btn
                   color="grey darken-4 white--text"
                   class="d-flex justify-center rounded-0 ma-5"
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
                    <v-list-item class="goldText" v-for="item in items" :key="item.text" router :to="{name: item.link}" >
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

export default {
    data () {
        return {
            drawer: false,
            selectedItem: 1,
            items: [
              { text: 'Home', icon: 'mdi-clock' },
              { text: 'About', icon: 'mdi-account' },
              { text: 'Nouveau', icon: 'mdi-flag' },
            ],
        }
    }

}

</script>

