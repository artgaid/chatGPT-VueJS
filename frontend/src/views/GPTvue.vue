<template>
  <div>
    <input v-model="userInput" @keyup.enter="sendMessage" type="text" />
    <div v-for="(message, index) in messages" :key="index">
      <p v-if="message.sender === 'user'">{{ message.text }}</p>
      <p v-else-if="message.sender === 'bot'">{{ message.text }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    userInput: '',
    messages: [],
    isLoading: false
  }),
  methods: {
    async sendMessage() {
      if (this.userInput.trim() === '') return
      this.messages.push({ sender: 'user', text: this.userInput })
      this.isLoading = true
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: this.userInput }]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
          }
        }
      )

      if (response) {
        const { choices } = response.data.choices[0]
        const botMessage = choices[0].message.content.trim()
        this.messages.push({ sender: 'bot', text: botMessage })

        console.log(choices, 'choices')
      }

      this.userInput = ''
      this.isLoading = false
    }
  }
}
</script>
