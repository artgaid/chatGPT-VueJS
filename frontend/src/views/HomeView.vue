<template>
  <main>
    <h1>HOME</h1>
    <div class="chat__container"></div>
    <form class="chat__form" @submit.prevent="fetchAnswer">
      <textarea v-model="question" placeholder="Ask VueChatGPT" />
      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const question = ref('')

const fetchAnswer = async () => {
  console.log(question.value, ':fetchAnswer')
  const res = await axios.get('http://localhost:3001/').then((res) => res.data)
  console.log(res, ':res')
}
</script>

<style lang="scss" scoped>
h1 {
  color: blueviolet;
}
</style>
