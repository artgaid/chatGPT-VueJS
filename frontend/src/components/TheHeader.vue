<template>
  <div class="w-9 h-9">
    <IconGPTLogo />
  </div>

  <h1>{{ modelChat }}</h1>
</template>

<script lang="ts" setup>
import IconGPTLogo from '@/components/icons/IconGPTLogo.vue'
import { useChatGPTStore } from '@/stores/chatGPT'

const chatGPTStore = useChatGPTStore()
const { modelChat } = chatGPTStore
</script>

<style scoped></style>
