import { useTerminalOutputStore } from '@/stores/terminalOutputStore.ts'
import { useTerminalCommandsStore } from '@/stores/terminalCommandsStore.ts'

export type Message = {
  system?: boolean
  message: string
  type: AvailableCommandTypes
}

export type AvailableCommandTypes = 'info' | 'error' | 'success' | 'warning'

export const useCommandHandler = () => {
  const terminalStore = useTerminalOutputStore()
  const terminalCommandsStore = useTerminalCommandsStore()

  const handleCommand = (command: string) => {
    const [name, ...args] = command.split(' ')

    terminalStore.addUserInputMessage(command)
    terminalCommandsStore.executeCommand(name, args)
  }

  return {
    handleCommand
  }
}
