import { inject, injectable } from 'inversify';
import * as commands from '../../commands';
import { TYPES } from '../../common/types';
import {
  ICommand,
  ICommandFactory,
  IModelsFactory,
} from '../../contracts';
import { Constants } from './../../common/constants';

@injectable()
export class CommandFactory implements ICommandFactory {
  //private readonly _userdata: IUserDatabase;
  private readonly _modelsFactory: IModelsFactory;
  //private readonly _commands: Map<string, new (data: IUserDatabase, factory: IModelsFactory) => ICommand>;
  private readonly _commands: Map<string, new (factory: IModelsFactory) => ICommand>;


  public constructor(@inject(TYPES.modelsFactory) modelsFactory: IModelsFactory) {
    //this._data = data;
    this._modelsFactory = modelsFactory;

    this._commands = Object
      .keys(commands)
      .reduce((allCommands: Map<string, new () => ICommand>, commandName: string): Map<string, new () => ICommand> => {
        // tslint:disable:no-any
        allCommands.set(commandName.toLowerCase(), (<any>commands)[commandName]);

        return allCommands;
      },
      new Map()
    );
  }


  public getCommand(commandName: string): ICommand {
    const lowerCaseCommandName: string = commandName.toLowerCase();

    const command: new (factory: IModelsFactory) => ICommand = this._commands.get(lowerCaseCommandName);
    // if (!command) {
    //   throw new Error(Constants.getInvalidCommandErrorMessage(commandName));
    // }

    return new command(this._modelsFactory);
  }
}
