<template>
  <div id="service">
    <ServiceContainer
      v-for="(product, i) in products"
      :key="i"
      v-bind:service="service"
      v-bind:product="product"
    />
    <Footer />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import Footer from "@/components/Footer";
import ServiceContainer from "@/components/Service/ServiceContainer";
export default {
  name: "Service",
  components: {
    Toolbar,
    ServiceContainer,
    Footer,
  },
  props: {
    id: Number,
  },

  created() {
    this.$store.commit("setCurrentServiceVersionMutation", this.id);
  },

  computed: {
    service: function () {
      console.log(this.$store.getters.getCurrentService);
      return this.$store.getters.getCurrentService;
    },
    products: function () {
      return this.service.products;
    },
  },
};
</script>