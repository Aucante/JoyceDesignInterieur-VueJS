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
                >{{service.mdi}}</v-icon>
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
                router :to="{name: link}"
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
            title: 'PRESTATIONS',
            btn: 'Découverte des prestations',
            link: 'Services'
        }
    },
    computed: {
        services() {
            return this.$store.getters.services
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