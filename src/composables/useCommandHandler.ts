import { useTerminalOutputStore } from '@/stores/terminalOutputStore.ts'

export type Message = {
  system?: boolean
  message: string
  type: AvailableCommandTypes
}

export type AvailableCommandTypes = 'info' | 'error' | 'success' | 'warning'

export const useCommandHandler = () => {
  const terminalStore = useTerminalOutputStore()

  const commands: Record<string, CommandHandler> = {
    clear: () => {
      terminalStore.clearOutputMessages()
    },
    help: () => {
      terminalStore.addSystemOutputMessage('Available commands: help, clear')
    }
  }

  // used to register other commands later
  const registerCommand = (name: string, handler: CommandHandler) => {
    console.log('registerCommand', name, handler)
    commands[name] = handler
  }

  const handleCommand = (command: string) => {
    console.log('handleCommand', command)
    console.log(commands)
    const [name, ...args] = command.split(' ')
    const handler = commands[name]

    terminalStore.addUserInputMessage(command)

    if (handler) {
      handler(args)
    } else {
      terminalStore.addSystemOutputMessage(`Unknown command: ${command}`, 'error')
    }
  }

  return {
    registerCommand,
    handleCommand
  }
}
