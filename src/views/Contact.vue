<template>
    <div id="contact">
    <ContactHeader />
    <ContactDetails />
    <Footer />
    </div>
</template>

<script>
import ContactHeader from '@/components/Contact/ContactHeader'
import ContactDetails from '@/components/Contact/ContactDetails'
import Footer from '@/components/Footer'

  export default {
    name: 'Contact',
    components: {
    ContactHeader,
    ContactDetails,
    Footer
  },
  }
</script>