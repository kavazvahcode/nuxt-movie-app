<template>
  <div
    class="bg-white/20 backdrop-blur-sm rounded-3xl hover:bg-white/20 px-6 py-3 text-white flex gap-4"
  >
    <NuxtImg
      src="/icons/search.png"
      alt="trending"
      class="object-cover w-6 h-6"
    />
    <!-- <p>{{ t('trending.trending') }}</p> -->
    <input
      placeholder="Search"
      class="bg-transparent border-transparent w-full"
      style="color: white"
      :style="{ '--placeholder-color': 'white' }"
      outline="none"
    />
  </div>
</template>

<style>
input::placeholder {
  color: var(--placeholder-color);
}
input:focus {
  outline: none;
}
</style>
