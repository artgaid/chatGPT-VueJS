<template>
  <main class="container py-24">
    <div class="border rounded w-full h-full">
      <div>Answer</div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi doloribus, earum eius
          est et eum explicabo fugiat harum laudantium maxime modi necessitatibus nemo optio
          possimus quaerat, quidem tenetur voluptatibus!
        </p>
        <div v-for="choice in answer.choices" :key="choice.index">{{ choice.message.content }}</div>
      </div>
    </div>
    <TheFormRequest />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AnswerType } from '@/types/answer.type'
import TheFormRequest from '@/components/TheFormRequest.vue'

const answer = ref({} as AnswerType)
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;

  display: grid;
  align-items: start;
  justify-items: start;
  grid-gap: 10px;
}
</style>
