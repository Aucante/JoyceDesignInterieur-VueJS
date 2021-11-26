<template>
    <v-container fluid class="primary">
        <v-container class="btnSmall">
        <v-row>
            <v-col
            cols="12"
            sm="8"
            md="8"
            lg="8"
            xl="8"
            class="d-flex justify-center"
            >
                <v-card
                    class="d-flex align-start mx-auto btnSmall"
                    width="800"
                    outlined
                >
                    <v-card-text class="white--text">
                    <div class="d-flex justify-center display-1">{{service.title}}</div>
                    <div class="d-flex justify-center title py-5">{{service.content1}}</div>
                    <div class="d-flex justify-center ">{{service.description1}}</div>
                    </v-card-text>
                </v-card>
            
                
            </v-col>
            <v-col
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            class="d-flex justify-center"
            >
         
            <v-container
            >
                <v-img
                class="white--text align-end rounded-lg"
                :src="service.productImage1"
                >
                </v-img>
            </v-container>
               
            
                
            </v-col>
        </v-row>
        </v-container>
        <v-container class="primary">
        <v-row>
             <v-col
                cols="12"
                sm="4"
                md="4"
                lg="4"
                xl="4"
                class="d-flex justify-center"
                >
            
                <v-container
                >
                    <v-img
                    class="white--text align-end"
                    :src="service.productImage1"
                    >
                    </v-img>
                </v-container>
            </v-col>
            <v-col
            cols="12"
            sm="8"
            md="8"
            lg="8"
            xl="8"
            class="d-flex justify-center"
            >
                <v-card
                    class="d-flex align-start mx-auto primary"
                    width="800"
                    outlined
                >
                    <v-card-text>
                    <div class="d-flex justify-center display-1">{{service.title}}</div>
                    <div class="d-flex justify-center title py-5">{{service.content2}}</div>
                    <div class="d-flex justify-center ">{{service.description2}}</div>
                    </v-card-text>
                </v-card>
            
                
            </v-col>
           
        </v-row>
        </v-container>
        <v-container class="btnSmall">
        <v-row>
            <v-col
            cols="12"
            sm="8"
            md="8"
            lg="8"
            xl="8"
            class="d-flex justify-center"
            >
                <v-card
                    class="d-flex align-start mx-auto btnSmall"
                    width="800"
                    outlined
                >
                    <v-card-text class="white--text">
                    <div class="d-flex justify-center display-1">{{service.title}}</div>
                    <div class="d-flex justify-center title py-5">{{service.content3}}</div>
                    <div class="d-flex justify-center ">{{service.description3}}</div>
                    </v-card-text>
                </v-card>
            
                
            </v-col>
            <v-col
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            class="d-flex justify-center"
            >
         
            <v-container
            >
                <v-img
                class="white--text align-end"
                :src="service.productImage1"
                >
                </v-img>
            </v-container>
               
            
                
            </v-col>
        </v-row>
        </v-container>
        <v-container class="primary">
        <v-row>
             <v-col
                cols="12"
                sm="4"
                md="4"
                lg="4"
                xl="4"
                class="d-flex justify-center"
                >
            
                <v-container
                >
                    <v-img
                    class="white--text align-end"
                    :src="service.productImage1"
                    >
                    </v-img>
                </v-container>
            </v-col>
            <v-col
            cols="12"
            sm="8"
            md="8"
            lg="8"
            xl="8"
            class="d-flex justify-center"
            >
                <v-card
                    class="d-flex align-start mx-auto primary"
                    width="800"
                    outlined
                >
                    <v-card-text>
                    <div class="d-flex justify-center display-1">{{service.title}}</div>
                    <div class="d-flex justify-center title py-5">{{service.content4}}</div>
                    <div class="d-flex justify-center ">{{service.description4}}</div>
                    </v-card-text>
                </v-card>
            
                
            </v-col>
           
        </v-row>
        </v-container>
    </v-container>
</template>


<script>

export default {
    props: ['service']
}
</script>