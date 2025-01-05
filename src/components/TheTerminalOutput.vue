<script setup lang="ts">
import { useTerminalOutputStore } from '@/stores/terminalOutputStore.ts'
import { computed } from 'vue'
import type { AvailableCommandTypes } from '@/composables/useCommandHandler.ts'

const terminalStore = useTerminalOutputStore()

const messageClass = computed(() => {
  return (type: AvailableCommandTypes) => {
    switch (type) {
      case 'error':
        return 'text-red-500'
      case 'success':
        return 'text-green-500'
      case 'warning':
        return 'text-yellow-500'
      case 'info':
      default:
        return 'text-white'
    }
  }
})
</script>

<template>
  <div class="text-white text-xs h-full">
    <div v-for="message in terminalStore.outputMessages" :key="message" class="whitespace-pre-wrap">
      <p :class="messageClass(message.type)" class="mb-1">
        <span v-if="!message.system">$ </span>
        <span>{{ message.message }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
