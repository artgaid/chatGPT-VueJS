<template>
  <form class="form-request" @submit.prevent="sendMessage">
    <textarea
      v-model="chatGPTStore.userInput"
      @keyup.enter.prevent="sendMessage"
      type="text"
      placeholder="Ask VueChatGPT"
      :disabled="chatGPTStore.isLoading"
    />
    <button type="submit" :disabled="chatGPTStore.isLoading">
      <TheLoader v-if="chatGPTStore.isLoading" :color="'green'" :size="'xs'" />
      <span v-else>Submit</span>
    </button>
  </form>
</template>

<script lang="ts" setup>
import { useChatGPTStore } from '@/stores/chatGPT'
import TheLoader from '@/components/TheLoader.vue'
import { onMounted } from 'vue'

const chatGPTStore = useChatGPTStore()
const { sendMessage, getModels } = chatGPTStore

onMounted(() => {
  getModels()
})
</script>

<style scoped lang="scss">
.form-request {
  width: 100%;
  height: auto;
  display: flex;

  textarea {
    width: 100%;
    height: 100px;

    border: 1px solid $LGR;
    border-radius: 0.25rem;
    background-color: $LLLGR;

    transition: all 0.2s ease;
    padding: 10px;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.2px;
      color: $GR;

      transition: all 0.2s ease;
    }

    &:disabled {
      pointer-events: none;
      color: transparent;
      background-color: $LLLGR;

      &::placeholder {
        color: transparent;
      }
    }

    &:hover {
      border: 1px solid $GR;

      textarea::placeholder {
        color: $GR1;
      }
    }
  }

  button {
    width: 150px;
    height: auto;

    color: $GR1;
    border: 1px solid $LGR;
    border-radius: 0.25rem;

    transition: all 0.3s ease;

    margin-left: 5px;

    &:disabled {
      pointer-events: none;
      color: $LGR;
      background-color: $LLLGR;
    }

    &:hover {
      color: $GRN;
      border: 1px solid $GRN;
      box-shadow: inset 150px 0 0 0 $GRN10;
    }
  }
}
</style>
