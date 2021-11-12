<template>
    <div id="contact">
    <ContactHeader />
    <ContactDetails />
    <Contact />
    <Footer />
    </div>
</template>

<script>

  export default {
    name: 'Home',
    components: {
    ContactHeader: () => import('@/components/Contact/ContactHeader'),
    ContactDetails: () => import('@/components/Contact/ContactDetails'),
    Footer: () => import('@/components/Footer'),
  },
  }
</script>