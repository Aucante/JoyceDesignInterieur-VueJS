<template>
    <v-container>
        <v-container 
        
        fluid>
        <v-row>
            <v-col
            v-for="(service, i) in services"
            :key="i"
            cols="12"
            md="6"
            >
                <v-container>
                    <v-icon 
                    size="90"
                    class="d-flex justify-center mb-10"
                    >{{service.mdi}}</v-icon>
                    <p
                    class="d-flex justify-center display-1 font-weight-medium mb-5"
                    >{{service.title}}</p>
                    <v-divider></v-divider>
                    <v-container
                    class="mt-5"
                    >
                        <v-row>
                            <v-col
                            cols="12"
                            >
                            <v-expansion-panels 
                            focusable
                            >
                                <v-expansion-panel
                                v-if="service.amountContent >= 1"
                                >
                                <v-expansion-panel-header
                                class="body-1 font-weight-bold"
                                >
                                {{service.content1}}
                                <v-spacer></v-spacer>
                                {{service.price1}}€
                                </v-expansion-panel-header>
                                <v-expansion-panel-content
                                class="pa-4"
                                >
                                {{service.description1}}
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel
                                v-if="service.amountContent >= 2"
                                >
                                <v-expansion-panel-header
                                class="body-1 font-weight-bold"
                                >
                                {{service.content2}}
                                <v-spacer></v-spacer>
                                {{service.price2}}€
                                </v-expansion-panel-header>
                                <v-expansion-panel-content
                                class="pa-4"
                                >
                                {{service.description2}}
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel
                                v-if="service.amountContent >= 3"
                                >
                                <v-expansion-panel-header
                                class="body-1 font-weight-bold"
                                >
                                {{service.content3}}
                                <v-spacer></v-spacer>
                                {{service.price3}}€
                                </v-expansion-panel-header>
                                <v-expansion-panel-content
                                class="pa-4"
                                >
                                {{service.description3}}
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel
                                v-if="service.amountContent >= 4"
                                >
                                <v-expansion-panel-header
                                class="body-1 font-weight-bold"
                                >
                                {{service.content4}}
                                <v-spacer></v-spacer>
                                {{service.price4}}€
                                </v-expansion-panel-header>
                                <v-expansion-panel-content
                                class="pa-4"
                                >
                                {{service.description4}}
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel
                                v-if="service.amountContent >= 5"
                                >
                                <v-expansion-panel-header
                                class="body-1 font-weight-bold"
                                >
                                {{service.content5}}
                                <v-spacer></v-spacer>
                                {{service.price5}}€
                                </v-expansion-panel-header>
                                <v-expansion-panel-content
                                class="pa-4"
                                >
                                {{service.description5}}
                                </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
    </v-container>
</template>

<script>

export default {
    computed: {
        services() {
            return this.$store.getters.services
        },
    }
}
</script>
