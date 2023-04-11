<template>
  <div class="messages scroll">
    <div class="messages__wrapper" ref="refMessages">
      <div v-if="chatGPTStore.messages.length === 0" class="messages__placeholder">
        Reply from chat
      </div>
      <div
        v-for="(message, index) in chatGPTStore.messages"
        :key="index"
        :class="{
          messages__user: message.sender === 'user',
          messages__bot: message.sender === 'bot',
          messages__error: message.sender === 'error'
        }"
      >
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useChatGPTStore } from '@/stores/chatGPT'
import { onMounted, ref, watch } from 'vue'

const chatGPTStore = useChatGPTStore()

const refMessages = ref<HTMLDivElement>()

watch(chatGPTStore.messages, () => {
  setTimeout(() => {
    if (refMessages.value) {
      refMessages.value?.children[refMessages.value?.children.length - 1].scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, 0)
})

onMounted(() => {
  if (refMessages.value) {
    refMessages.value.scrollTop = 9999
  }
})
</script>

<style scoped lang="scss">
.messages {
  width: 100%;
  height: 100%;

  display: flex;

  border: 1px solid $LGR;
  border-radius: 0.25rem;
  background-color: $LLLGR;

  &:hover {
    border-color: $GR;

    .messages__placeholder {
      color: $GR1;
    }
  }

  &__wrapper {
    width: 100%;
    height: max-content;

    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(50px, auto));
    grid-gap: 5px;
    align-items: center;
    align-content: start;

    border: none;
    border-radius: 0.25rem;

    transition: all 0.2s ease;
    padding: 10px;
  }

  &__placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: $GR;

    transition: all 0.2s ease;
  }

  &__user,
  &__bot,
  &__error {
    width: fit-content;
    height: auto;

    padding: 10px;
  }

  &__user {
    justify-self: right;
    border-radius: 10px 10px 0 10px;
    background-color: $GRN10;
  }

  &__bot {
    justify-self: left;
    background-color: $GRN8;
    border-radius: 10px 10px 10px 0;
  }

  &__error {
    color: $RD;

    justify-self: left;
    background-color: $RD10;
    border-radius: 10px 10px 10px 0;
  }
}
</style>
