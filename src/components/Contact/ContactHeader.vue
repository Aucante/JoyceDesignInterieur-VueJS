<template>
    <v-row class="my-10">
        <v-col
            cols="12"
        >
            <v-container fluid>
                <p
                class="d-flex justify-center display-1 font-weight-medium"
                >{{title}}</p>
                <v-divider></v-divider>
                <v-icon 
                size="90"
                class="d-flex justify-center mt-4 mb-n7"
                >{{mdi}}</v-icon>
                <v-row>
                    <v-col
                        cols="12"
                    >
                    
                        <v-container>
                            <div class="d-flex justify-center my-7">
                                <p>{{content}}</p>
                            </div>
                        </v-container>

                    </v-col>
                    
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>

export default {
    data() {
        return {
            title: 'CONTACT',
            content: 'Réservez un créneau horaire afin d\'échanger sur votre projet - 30mn',
            mdi: 'mdi-account-check-outline'
        }
    }
   
}
</script>