<template>
  <div class="relative h-full w-full">
    <NuxtImg
      src="/images/background-main.jpg"
      alt="main-bg"
      class="object-cover h-full w-full absolute"
    />
    <div class="backdrop-blur-2xl bg-black/20 min-h-screen">
      <Header />
      <slot />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
</script>
