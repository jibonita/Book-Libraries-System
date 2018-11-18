import { IGlobalDatabase, ICommand, IModelsFactory, IUser } from "../../contracts";
import { Constants } from "../../common/constants";
import { injectable, inject } from "inversify";
import { TYPES } from "../../common/types";
import { UserType } from '../../enums'

@injectable()
export class AddUser implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase, @inject(TYPES.modelsFactory) factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    public execute(parameters: string[]): string {
        const [name, password] = parameters;
  
        if (this._data.userDatabase.find((user: IUser) => user.name === name)) {
             throw new Error(Constants.getUserExistsErrorMessage(name));
        }
        const user: IUser = this._factory.addUser(name, password);

        this.addUserToLocalStorage(user);

        return Constants.getUserCreatedSuccessMessage(name);
    }

    public addUserToLocalStorage(user: IUser): void {
      const userDB = this._data.userDatabase;
      const newUser = {name: user.name, password: user.password, userType: user.userType, borrowedBooks: user.borrowedBooks, booksHistory: user.booksHistory , updateLists: user.updateLists}
      userDB.push(newUser);
      
      localStorage.setItem('users', JSON.stringify(userDB));
    }
  }