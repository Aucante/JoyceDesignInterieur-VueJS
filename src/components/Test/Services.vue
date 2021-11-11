<template>
    <base-section class="mb-16">
    <h1
        class="display-1 ma-8 font-weight-medium"
        >MES SERVICES</h1>
        <v-divider></v-divider>
    <v-container fluid id="backgroundContainer">
        
        <v-row>
            <v-col
                cols="12"
                xl="8"
                offset-xl="2"
            >
                <v-container>
                    <v-card color="blue-grey lighten-5" class="d-flex justify-center mb-6 rounded-lg" height="480" outlined tile>
                        <v-col
                            cols="1"
                            sm="1"
                            md="3"
                            lg="3"
                            xl="3"
                            class="d-flex justify-center"
                        >
                            <div class="d-flex justify-center">
                            <v-avatar 
                            class="align-self-center hidden-sm-and-down"
                            size="120"
                            >
                            <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John"   
                            >
                            </v-avatar>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="9"
                            lg="9"
                            xl="9"
                            
                        >
                            <v-card-text>
                            <p class="d-flex justify-center text-h4 text--primary">
                                Prestations à la carte
                            </p>
                            <v-divider></v-divider>
                            <v-card-text class="font-weight-medium">Shopping list</v-card-text>
                            <v-card-text class="font-weight-medium">Planche d'ambiance</v-card-text>
                            <v-card-text class="font-weight-medium">Modélisation 3D - pièce simple</v-card-text>
                            <v-card-text class="font-weight-medium">Modélisation 3D - pièce technique</v-card-text>
                            <v-card-text class="font-weight-medium">Modélisation 3D - pièce multifonctions</v-card-text>
                            <div class="d-flex justify-center">
                            <v-btn
                                color="grey darken-4 white--text"
                                class="d-flex justify-center rounded-0 mt-4"
                                elevation="5"
                            >
                                En savoir plus
                            </v-btn>
                            </div>
                        </v-card-text>
                        </v-col>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>
        
        
    </v-container>
    </base-section>
    
</template>

<script>

export default {
    name: 'Services',

    data: () => ({
        features: [
            {
                title: 'Prestations forfaits',
                icon: 'mdi-account-check',
            },
            {
                title: 'Prestations carte',
                icon: 'mdi mdi-card-text',
            },
            {
                title: 'Options',
                icon: 'mdi mdi-clipboard-check-multiple',
            },
        ]
    })
        

    
}
</script>

<style scoped>
#backgroundContainer {
    background-color: #ECEFF1;
}

</style>