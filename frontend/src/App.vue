<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <header class="container">
    <TheHeader />
  </header>

  <main class="container py-24">
    <RouterView />
  </main>

  <footer class="container">
    <TheFooter />
  </footer>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;

  display: grid;
  grid-auto-rows: 60px 1fr 60px;
}

header {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: left;
  align-items: center;
  grid-gap: 10px;
}

main {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr 200px;
  align-items: center;
  justify-items: start;
  grid-gap: 10px;

  overflow: hidden;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
}
</style>
