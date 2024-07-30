<template>
  <div class="min-h-screen flex flex-col bg-cover relative">
    <NuxtImg
      src="/images/background-main.jpg"
      class="object-cover min-h-full w-full absolute top-0"
    />
    <div
      class="container mx-auto backdrop-blur-2xl bg-black/20 m-6 p-6 rounded-3xl border border-white/30"
    >
      <div class="flex flex-col gap-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageLayout',
}
</script>
