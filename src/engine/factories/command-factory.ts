import { inject, injectable } from 'inversify';
import * as commands from '../../commands';
import {
  ICommand,
  ICommandFactory,
  IModelsFactory,
  IGlobalDatabase,
} from '../../contracts';
import { Constants } from './../../common/constants';
import { TYPES } from '../../common/types';

@injectable()
export class CommandFactory implements ICommandFactory {
  private readonly _data: IGlobalDatabase;
  private readonly _modelsFactory: IModelsFactory;
  private readonly _commands: Map<string, new (data: IGlobalDatabase, factory: IModelsFactory) => ICommand>;
  
  public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase, @inject(TYPES.modelsFactory) modelsFactory: IModelsFactory) {
  //public constructor(data: IGlobalDatabase, modelsFactory: IModelsFactory) {
    this._data = data;
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

  public getCommand(commandName: string): ICommand  {
    const lowerCaseCommandName: string = commandName.toLowerCase();

    const command: (new (data: IGlobalDatabase, factory: IModelsFactory) => ICommand) | undefined = this._commands.get(lowerCaseCommandName);
    if (!command) {
      throw new Error(Constants.getInvalidCommandErrorMessage(commandName));
    }

    return new command(this._data, this._modelsFactory);
  }
}

