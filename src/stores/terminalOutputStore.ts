import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
import type { AvailableCommandTypes, Message } from '@/composables/useCommandHandler.ts'

export const useTerminalOutputStore = defineStore('terminalOutput', () => {
  const messages: Ref<Message[]> = ref([])

  function addSystemOutputMessage(message: string, type: AvailableCommandTypes = 'info') {
    messages.value.push({
      system: true,
      message,
      type
    })
  }

  function addUserInputMessage(message: string) {
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
    addSystemOutputMessage,
    addUserInputMessage,
    clearOutput
  }
});
