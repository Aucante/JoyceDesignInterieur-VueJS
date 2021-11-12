<template>
    <div id="achievements">
    <FeedCard />
    <Footer />
    </div>
</template>

<script>

  export default {
    name: 'Achievements',
    components: {
    FeedCard: () => import('@/components/Achievements/FeedCard'),
    Footer: () => import('@/components/Footer'),
  },
  }
</script>