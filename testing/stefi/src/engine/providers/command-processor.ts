import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { ICommand, ICommandFactory, ICommandProcessor } from '../../contracts';

//@injectable()
export class CommandProcessor implements ICommandProcessor {
  private _commandFactory: ICommandFactory;

  // constructor(@inject(TYPES.commandFactory) commandFactory: ICommandFactory) {
  //   this._commandFactory = commandFactory;
  // }
  constructor(commandFactory: ICommandFactory) {
    this._commandFactory = commandFactory;
  }

  public processCommand(commandAsString: string): string {
    const command: ICommand = this.parseCommand(commandAsString);
    const commandParameters: string[] = this.parseParameters(commandAsString);

    return command.execute(commandParameters);
  }

  private parseCommand(commandAsString: string): ICommand {
    const commandName: string = commandAsString.trim().split(' ')[0];

    return this._commandFactory.getCommand(commandName);
  }

  private parseParameters(commandAsString: string): string[] {
    return commandAsString.split(' ').slice(1);
  }
}
