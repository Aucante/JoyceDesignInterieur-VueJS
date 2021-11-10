<template>
  <v-app>
    <toolbar />
    <Carousel />
    <About />
    <SlideCard />
    <Ratings />
    <Products />
    <Reservation />
    <Circular />
    <Footer />
  

    
    



    


    
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'About'}">About</router-link>
    <router-link to="/nouveau">Nouveau</router-link>
    <router-view></router-view>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Toolbar: () => import('@/components/Toolbar'),
    Carousel: () => import('@/components/Home/Carousel'),    
    FeedCard: () => import('@/components/Home/FeedCard'),    
    Services: () => import('@/components/Home/Services'),    
    Timeline: () => import('@/components/Home/Timeline'),
    Test: () => import('@/components/Home/Test'),
    About: () => import('@/components/Home/About'),
    Footer: () => import('@/components/Footer'),
    SlideCard: () => import('@/components/Home/SlideCard'),
    Circular: () => import('@/components/Home/Circular'),
    Products: () => import('@/components/Home/Products'),
    Reservation: () => import('@/components/Home/Reservation'),
    Ratings: () => import('@/components/Home/Ratings'),
        
  },
};

</script>
