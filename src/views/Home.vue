<template>
    <div id="home">
    <Carousel />
    <About />
    <SlideCard />
    <Ratings />
    <Products />
    <Reservation />
    <Circular />
    <Footer />
    </div>
</template>

<script>

  export default {
    name: 'Home',
    components: {
    Carousel: () => import('@/components/Home/Carousel'),  
    About: () => import('@/components/Home/About'),
    Footer: () => import('@/components/Footer'),
    SlideCard: () => import('@/components/Home/SlideCard'),
    Circular: () => import('@/components/Home/Circular'),
    Products: () => import('@/components/Home/Products'),
    Reservation: () => import('@/components/Home/Reservation'),
    Ratings: () => import('@/components/Home/Ratings'),      
  },
  }
</script>
