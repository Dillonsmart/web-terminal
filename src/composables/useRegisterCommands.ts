import { useCommandHandler } from '@/composables/useCommandHandler.ts'
import { useTerminalOutputStore } from '@/stores/terminalOutputStore.ts'

export const registerCommands = () => {
  const { registerCommand } = useCommandHandler()
  const terminalStore = useTerminalOutputStore()

  registerCommand('date', () => {
    const currentDate = new Date().toLocaleString()
    terminalStore.addSystemOutputMessage(`Current date and time: ${currentDate}`, 'info')
  })
}
