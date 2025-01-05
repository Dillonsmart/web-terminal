<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { useCommandHandler } from '@/composables/useCommandHandler.ts'

const commandHandler = useCommandHandler()
const typedInput: Ref<string> = ref('')

function handleInput(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    const input = typedInput.value

    commandHandler.handleCommand(input)

    typedInput.value = ''
  }
}
</script>

<template>
  <div class="flex gap-1 text-sm text-gray-300">
    $
    <input class="bg-inherit outline-none border-none w-full" id="terminalInput" v-model="typedInput" @keydown="handleInput">
  </div>
</template>

<style scoped>

</style>
