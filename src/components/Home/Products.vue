<template>
    <v-container fluid id="backgroundContainer">
        <p
        class="d-flex justify-center display-1 my-8 font-weight-medium"
        >{{title}}</p>
        <v-divider></v-divider>
        <v-container>
            <v-row>
                <v-col
                    v-for="(service, i) in services"
                    :key="i"
                    cols="12"
                    md="3"
                    lg="3"
                    xl="3"
                    class="d-flex justify-center"
                >
                <v-card
                class="justify-center px-5"
                color="blue-grey lighten-5"
                width="400"
                outlined
                >
                <v-icon 
                size="90"
                class="d-flex justify-center mb-4"
                >{{service.avatar}}</v-icon>
                <div>
                    <p class="d-flex justify-center title font-weight-medium">{{service.title}}</p>
                </div>
                <div class="mt-7">
                <p class="d-flex justify-start body-2 font-weight-light">- {{service.content1}}</p>
                <p class="d-flex justify-start body-2 font-weight-light">- {{service.content2}}</p>
                <p v-if="service.content3 != null" class="d-flex justify-start body-2 font-weight-light">- {{service.content3}}</p>
                </div>
                </v-card>
                </v-col>
                <v-col
                    cols="12"
                    class="d-flex justify-center"
                >
                    <v-btn
                color="grey darken-4 white--text"
                class="rounded-0 pa-3 mb-8"
                elevation="5"
                >
                {{btn}}
                </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            services: [
          {title: 'Prestations à la carte', avatar: 'mdi-card-bulleted-outline', content1: 'Shopping list', content2: 'Planche d\'ambiance', content3: 'Modélisation 3D - pièce simple / technique / multifonctions', content4: 'Modélisation 3D - pièce technique', content5: 'Modélisation 3D - pièce multifonctions', option: null},
          {title: 'Prestations au forfait', avatar: 'mdi-file-table-box-multiple-outline', content1: 'Forfait pièce simple', content2: 'Forfait pièce technique', content3: 'Forfait pièce multifonctions', content4: null, content5: null, option: null},
          {title: 'Option 3D à la carte', avatar: 'mdi-apple-keyboard-option', content1: 'Plan d\'aménagement 3D', content2: 'Rendu 360°', content3: null, content4: null, content5: null, option: '(Prestations à la carte)'},
          {title: 'Option 3D au forfait', avatar: 'mdi-lock-open-alert-outline', content1: '3D version supplémentaire pièce simple', content2: '3D version supplémentaire pièce technique', content3: '3D version supplémentaire pièce multifonctions', content4: null, content5: null, option: '(Prestation au forfait)'},
      ],
            title: 'PRESTATIONS',
            btn: 'Découverte des prestations',
        }
    }
    
}
</script>

<style scoped>
#backgroundContainer {
background-color: #ECEFF1
;
}
</style>