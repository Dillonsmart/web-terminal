import { type Ref, ref } from 'vue'
import { useTerminalOutputStore } from '@/stores/terminalOutputStore.ts'
import { defineStore } from 'pinia'

export const useTerminalCommandsStore = defineStore('terminalCommands', () => {
  const commands: Ref<Record<string, CommandHandler>> = ref({});
  const terminalOutputStore = useTerminalOutputStore();

  function registerCommand(name: string, handler: CommandHandler) {
    commands.value[name] = handler;
  }

  function executeCommand(name: string, args: string[]) {
    const handler = commands.value[name];
    if (handler) {
      handler(args);
    } else {
      terminalOutputStore.addSystemOutputMessage(`Unknown command: ${name}`, 'error');
    }
  }

  return {
    commands,
    registerCommand,
    executeCommand
  }
});
