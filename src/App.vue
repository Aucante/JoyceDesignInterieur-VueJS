<template>
  <v-app>
    <Toolbar />
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Toolbar: () => import('@/components/Toolbar')
  },
};

</script>
