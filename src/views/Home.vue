<template>
  <div id="home">
    <Carousel />
    <About />
    <Carousel3d />
    <Products />
    <Ratings />
    <Reservation />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Carousel: () => import("@/components/Home/Carousel"),
    About: () => import("@/components/Home/About"),
    Footer: () => import("@/components/Footer"),
    Carousel3d: () => import("@/components/Home/Carousel3d"),
    Circular: () => import("@/components/Home/Circular"),
    Products: () => import("@/components/Home/Products"),
    Reservation: () => import("@/components/Home/Reservation"),
    Ratings: () => import("@/components/Home/Ratings"),
  },
};
</script>
