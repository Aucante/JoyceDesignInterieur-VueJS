<template>
    <v-container>
        <p
        class="d-flex justify-center body-1 my-8"
        >{{card.description}}</p>
        </v-container>
        
</template>

<script>

export default {
    props: ['card']
}
</script>
