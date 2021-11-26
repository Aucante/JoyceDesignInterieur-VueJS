<template>
  <div id="service">
    <ServiceContainerFirst v-bind:service="service" />
    <ServiceContainerSecond v-bind:service="service" />
    <ServiceContainerThird v-bind:service="service" />
    <Footer />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import Footer from "@/components/Footer";
import ServiceContainerFirst from "@/components/Service/ServiceContainerFirst";
import ServiceContainerSecond from "@/components/Service/ServiceContainerSecond";
import ServiceContainerThird from "@/components/Service/ServiceContainerThird";

export default {
  name: "Service",
  components: {
    Toolbar,
    ServiceContainerFirst,
    ServiceContainerSecond,
    ServiceContainerThird,
    Footer,
  },
  props: ["id"],

  created() {
    this.$store.commit("setCurrentServiceVersionMutation", this.id);
  },

  computed: {
    service: function () {
      console.log(this.$store.getters.getCurrentService);
      return this.$store.getters.getCurrentService;
    },
  },
};
</script>