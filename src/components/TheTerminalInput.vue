<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { useCommandHandler } from '@/composables/useCommandHandler.ts'
import { useTerminalOutputStore } from '@/stores/terminalOutputStore.ts'

const commandHandler = useCommandHandler()
const terminalOutput = useTerminalOutputStore()
const typedInput: Ref<string> = ref('')
const arrowUpCounter: Ref<number> = ref(0)

function handleInput(event: KeyboardEvent) {

  switch(event.key) {
    case 'Enter':
      arrowUpCounter.value = 0 // reset counter
      const input = typedInput.value

      commandHandler.handleCommand(input)

      typedInput.value = ''
      break
    case 'ArrowUp':
      arrowUpCounter.value++
      typedInput.value = terminalOutput.getPreviousUserInput(arrowUpCounter.value)
      break
    case 'ArrowDown':
      arrowUpCounter.value--
      typedInput.value = terminalOutput.getPreviousUserInput(arrowUpCounter.value)
      break
  }
}
</script>

<template>
  <div class="flex gap-1 text-xs text-gray-300">
    $
    <input class="bg-inherit outline-none border-none w-full" id="terminalInput" v-model="typedInput" @keydown="handleInput">
  </div>
</template>

<style scoped>

</style>
