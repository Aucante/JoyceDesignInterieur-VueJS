<template>
  <div class="about">
    <AboutContainer />
    <SlideCard />
    <Footer />
  </div>
</template>

<script>
import AboutContainer from '@/components/About/AboutContainer'
import SlideCard from '@/components/Home/SlideCard'
import Footer from '@/components/Footer'

export default {
  name: 'About',
  components: {
    AboutContainer,
    SlideCard,
    Footer
  },
}
</script>
