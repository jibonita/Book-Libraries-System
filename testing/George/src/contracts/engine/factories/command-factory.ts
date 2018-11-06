import { ICommand } from '../..';

export interface ICommandFactory {
  getCommand(commandName: string): ICommand;
}
