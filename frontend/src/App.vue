<script setup lang="ts">
import { RouterView } from 'vue-router'
import IconGPTLogo from '@/components/icons/IconGPTLogo.vue'
</script>

<template>
  <header>
    <div class="w-9 h-9">
      <IconGPTLogo />
    </div>

    <h1 class="text-color-bl">gpt-3.5-turbo</h1>
  </header>

  <RouterView />
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
}

header {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: left;
  align-items: center;
  grid-gap: 10px;

  background-color: $WHT;

  padding: 10px 52px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
}
</style>
