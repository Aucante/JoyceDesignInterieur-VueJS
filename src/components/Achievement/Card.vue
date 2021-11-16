<template>
    <v-container 
    fluid
    class="my-10"
    >  
            <v-row>
                <v-col
                cols="12"
                md="8"
                lg="6"
                xl="6"
                offset-md="2"
                offset-lg="3"
                offset-xl="3"
                class="d-flex justify-center"
                >
                <v-card
                    class="mx-auto"
                    elevation="15"
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="card.src"
                    >
                    </v-img>
                    <v-card-text class="text--primary">
                    <div
                    class="d-flex justify-center display-1 mt-5"
                    >{{card.title}}</div>
                    </v-card-text>
                    <v-card-actions
                    class="d-flex justify-center"
                    >
                    
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>

export default {
        name: 'Card',
        props: ['id'],
       
        created() {
            this.$store.commit('setCurrentCardVersionMutation', this.id);
        },
        
        computed: {
            card: function() {
                console.log(this.$store.getters.getCurrentCard)
                return this.$store.getters.getCurrentCard;
            },
            
        }
    
}
</script>