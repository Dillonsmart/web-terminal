import { useTerminalOutputStore } from '@/stores/terminalOutputStore.ts'
import { useTerminalCommandsStore } from '@/stores/terminalCommandsStore.ts'

export const registerCommands = () => {
  const terminalStore = useTerminalOutputStore()
  const terminalCommandsStore = useTerminalCommandsStore()

  // I'd like to improve the way we register commands in the future
  terminalCommandsStore.registerCommand('date', () => {
    const currentDate = new Date().toLocaleString()
    terminalStore.addSystemOutputMessage(`Current date and time: ${currentDate}`, 'info')
  })

  terminalCommandsStore.registerCommand('clear', () => {
    terminalStore.clearOutput()
  })

  terminalCommandsStore.registerCommand('help', () => {
    terminalStore.addSystemOutputMessage('Available commands: date, clear, help', 'info')
  })
}
