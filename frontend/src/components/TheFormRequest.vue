<template>
  <form class="form-request" @submit.prevent="fetchAnswer">
    <textarea v-model="question" placeholder="Ask VueChatGPT" />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts" setup>
import axios from 'axios'
import type { AnswerType } from '@/types/answer.type'
import { ref } from 'vue'

const answer = ref({} as AnswerType)
const question = ref('')
const isLoading = ref(false)
const fetchAnswer = async () => {
  isLoading.value = true

  const res = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question.value }]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      }
    }
  )

  answer.value = res.data as AnswerType

  console.log(res, ':res')

  isLoading.value = false
}
</script>

<style scoped lang="scss">
.form-request {
  width: 100%;
  height: auto;
  display: flex;

  textarea {
    width: 100%;
    height: 100px;

    //border: none;
    border: 1px solid black;
    border-radius: 0.25rem;
    background-color: $LLLGR;

    padding: 10px;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.2px;

      /* GR1 */
      color: #989898;
    }
  }

  button {
    width: 150px;
    height: auto;

    border-radius: 0.25rem;

    transition: all 0.3s ease;

    margin-left: 5px;

    &:hover {
      color: $BL;
      box-shadow: inset 150px 0 0 0 $WBL1;
    }
  }
}
</style>
