<template>
  <div id="services">
    <ServicesInformations />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Services",
  components: {
    CardServices: () => import("@/components/Services/CardServices"),
    ServicesInformations: () =>
      import("@/components/Services/ServicesInformations"),
    Footer: () => import("@/components/Footer"),
  },
};
</script>