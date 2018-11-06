export interface ICommandProcessor {
  processCommand(commandAsString: string): string;
}
