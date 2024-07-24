<template>
  <div class="min-h-screen flex flex-col bg-cover relative">
    <NuxtImg
      src="/images/background-main.jpg"
      class="object-cover min-h-full w-full absolute top-0"
    />
    <div
      class="backdrop-blur-2xl bg-black/20 m-4 p-4 rounded-3xl border border-white/30"
    >
      <div class="flex flex-col gap-10">
        <Header />

        <slot />
      </div>
    </div>
  </div>
</template>

<script></script>
