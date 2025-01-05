<script setup lang="ts">

import TheTerminalWrapper from '@/components/TheTerminalWrapper.vue'
import TheTerminalInput from '@/components/TheTerminalInput.vue'
import TheTerminalOutput from '@/components/TheTerminalOutput.vue'
import { onMounted } from 'vue'
import { useTerminalOutputStore } from '@/stores/terminalOutputStore.ts'

const terminalStore = useTerminalOutputStore()

const fetchVersion = async () => {
  try {
    const response = await fetch('/version.txt')
    const version = await response.text()
    return version.trim()
  } catch (error) {
    console.error('Failed to fetch version:', error)
    return 'unknown'
  }
}

onMounted(async () => {
  const currentTimeStamp = new Date().toLocaleString()
  const version = await fetchVersion()

  terminalStore.addSystemOutputMessage(`v${version} Current time: ${currentTimeStamp}`)

  terminalStore.addSystemOutputMessage(' _    _      _\n' +
    '| |  | |    | |\n' +
    '| |  | | ___| | ___ ___  _ __ ___   ___\n' +
    '| |/\\| |/ _ \\ |/ __/ _ \\| \'_ ` _ \\ / _ \\\n' +
    '\\  /\\  /  __/ | (_| (_) | | | | | |  __/\n' +
    '\\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|')

  terminalStore.addSystemOutputMessage('Welcome to WebTerminal!')
  terminalStore.addSystemOutputMessage('Type "help" to see available commands.')
  terminalStore.addSystemOutputMessage('Type "clear" to clear the terminal.')
})
</script>

<template>
  <div class="h-screen w-screen bg-gray-950 grid place-items-center">
    <TheTerminalWrapper>
      <TheTerminalOutput />
      <TheTerminalInput />
    </TheTerminalWrapper>
  </div>
</template>

<style scoped>

</style>
