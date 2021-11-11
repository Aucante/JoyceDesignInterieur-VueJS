<template>
    <nav>
        <v-app-bar
      color="white accent-4">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-toolbar-title class="text-uppercase grey--text">
                <img class="logoResize" v-bind:src="logo">
                <span class="font-weight-light goldText">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>
            <template v-slot:extension>
        <v-tabs align-with-title class="d-flex justify-end mb-5" :color="'light-blue lighten-2'">
          <v-tab>Home</v-tab>
          <v-tab>About</v-tab>
          <v-tab>Nouveau</v-tab>
        </v-tabs>
      </template>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>  
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app width="30%" src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
            <v-list dense class="display-2">
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
import { mdiShareVariant } from '@mdi/js'
import Logo from './../assets/logo/Logo.png'

export default {
    name: 'Navbar',

    data () {
        return {
            drawer: false,
            logo: Logo,
            items: [
                { text: 'Real-Time', icon: 'mdi-clock', link: 'Home'},
                { text: 'Audience', icon: 'mdi-account', link: 'About'},
                { text: 'Audience', icon: 'mdi-account', link: 'About'},
                { text: 'Conversions', icon: 'mdi-flag', link: 'Nouveau'},
                { text: 'Conversions', icon: 'mdi-flag', link: 'Nouveau'},
            ]
        }
    }

}

</script>

<style scoped>

.goldText {
    color: #ffd700;
}
.logoResize {
    padding-top: 25px;
    height: 15%;
    width: 15%;
}

</style>