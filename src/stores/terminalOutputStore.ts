import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
import type { AvailableCommandTypes, Message } from '@/composables/useCommandHandler.ts'

export const useTerminalOutputStore = defineStore('terminalOutput', () => {
  const messages: Ref<Message[]> = ref([])
  const userMessages: Ref<Message[]> = ref([])

  function getPreviousUserInput(n: number = 0) {
    return userMessages.value[getUserInputLength() - n]?.message
  }

  function getUserInputLength() {
    return userMessages.value.length
  }

  function getUserInputHistory() {
    return userMessages.value.map((message) => message.message)
  }

  function addSystemOutputMessage(message: string, type: AvailableCommandTypes = 'info') {
    messages.value.push({
      system: true,
      message,
      type
    })
  }

  function addUserInputMessage(message: string) {
    userMessages.value.push({
      message
    })

    messages.value.push({
      system: false,
      message,
      type: 'info'
    })
  }

  function clearOutput() {
    messages.value = []
  }

  return {
    outputMessages: messages,
    userMessages: userMessages,
    getPreviousUserInput,
    getUserInputLength,
    getUserInputHistory,
    addSystemOutputMessage,
    addUserInputMessage,
    clearOutput
  }
});
