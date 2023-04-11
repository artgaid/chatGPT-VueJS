import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { AnswerType, MessageType } from '@/types/answer.type'
import axios from 'axios'

export const useChatGPTStore = defineStore('chatGPT', () => {
  // STORE
  const listModels = ref([])
  const modelChat = ref('gpt-3.5-turbo')
  const botAnswer: Ref<AnswerType> = ref({} as AnswerType)
  const userInput = ref('')
  const messages: Ref<MessageType[]> = ref([])
  const isLoading = ref(false)

  // MUTATION
  const sendMessage = async () => {
    if (userInput.value.trim() === '') return
    messages.value.push({ sender: 'user', text: userInput.value })
    isLoading.value = true

    await axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: modelChat.value,
          messages: [{ role: 'user', content: userInput.value }]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
          }
        }
      )
      .then((response) => {
        botAnswer.value = response.data
        const { choices } = response.data
        const botMessage = choices[0].message.content.trim()
        messages.value.push({ sender: 'bot', text: botMessage })
      })
      .catch((err) => {
        const errorMessage = err.response.data.error.message
        messages.value.push({ sender: 'error', text: errorMessage })
      })

    userInput.value = ''
    isLoading.value = false
  }

  const getModels = async () => {
    await axios
      .get('https://api.openai.com/v1/models', {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        }
      })
      .then((response) => {
        console.log(response.data, 'getModels')
        listModels.value = response.data
      })
      .catch((err) => {
        const errorMessage = err.response.data.error.message
        messages.value.push({ sender: 'error', text: errorMessage })
      })
  }

  // GETTERS

  return { modelChat, botAnswer, userInput, messages, isLoading, sendMessage, getModels }
})
