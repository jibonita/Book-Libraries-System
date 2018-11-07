import { inject, injectable, interfaces } from 'inversify';
import { Constants } from '../../common/constants';
import { TYPES } from '../../common/types';
import {
  ICommand,
  ICommandFactory
} from '../../contracts';

//@injectable()
export class ContainerCommandFactory implements ICommandFactory {
  private readonly _commandFactoryActivator: (commandName: string) => ICommand;

  // public constructor(@inject(TYPES.containerCommandFactory) commandFactoryActivator: interfaces.Factory<ICommand>) {
  //   this._commandFactoryActivator = <(commandName: string) => ICommand>commandFactoryActivator;
  // }
  public constructor(commandFactoryActivator: interfaces.Factory<ICommand>) {
    this._commandFactoryActivator = <(commandName: string) => ICommand>commandFactoryActivator;
  }

  public getCommand(commandName: string): ICommand {
    const lowerCaseCommandName: string = commandName.toLowerCase();

    try {
      return this._commandFactoryActivator(lowerCaseCommandName);
    } catch {
      throw new Error(''); //(Constants.getInvalidCommandErrorMessage(commandName));
    }
  }
}
