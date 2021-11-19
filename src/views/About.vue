<template>
  <div class="about">
    <AboutContainer />
    <Carousel3d />
    <Footer />
  </div>
</template>

<script>
import AboutContainer from '@/components/About/AboutContainer'
import Carousel3d from '@/components/Home/Carousel3d'
import Footer from '@/components/Footer'

export default {
  name: 'About',
  components: {
    AboutContainer,
    Carousel3d,
    Footer
  },
}
</script>
