import { inject, injectable } from 'inversify';
import { Constants } from '../../common/types';
import { TYPES } from '../../common/types';
import {
  ICommand,
  IUserDatabase,
  IFurniture,
  IModelsFactory,
  IUser
} from '../../contracts';
import { UserType } from '../../enums';

export class CreateUser implements ICommand{
  private readonly _data: IUserDatabase;
  private readonly _factory: IModelsFactory;
  public constructor(@inject(TYPES.userDatabase) data: IUserDatabase, @inject(TYPES.modelsFactory) factory: IModelsFactory) {
    this._data = data;
    this._factory = factory;
  }
  public execute(parameters: string[]): string {
    const [name, password] = parameters;

    // if (this._data.users.find((user: IUser) => user === user)) {
    //   throw new Error(Constants.getUserExistsErrorMessage(user));
    // }

    const user: IUser = this._factory.addUser(name, password);
    // this._data.users.push(user);

    return Constants.getUserCreatedSuccessMessage(user);
//   }


}