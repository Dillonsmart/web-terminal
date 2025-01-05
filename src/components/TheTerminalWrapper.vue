<script setup lang="ts">
  function resetFocus() {
    const terminalInput = document.querySelector('#terminalInput')
    terminalInput?.focus()
  }
</script>

<template>
  <div class="w-full lg:w-7/12 h-full lg:h-3/5 bg-black border border-gray-300 p-0.5 flex flex-col font-mono" @click="resetFocus">
    <slot />
  </div>
</template>

<style scoped>

</style>
