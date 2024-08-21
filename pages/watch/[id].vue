<template>
  <!-- <HomepageLayout> -->
  <StreamPlayer :imdbId="imdbId" />
  <!-- </HomepageLayout> -->
</template>

<script setup>
import StreamPlayer from '@/components/StreamPlayer'

const route = useRoute()
const imdbId = route.params.id

import HomepageLayout from '@/layouts/HomepageLayout.vue'
</script>
