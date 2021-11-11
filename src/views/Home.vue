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
  }
</script>
