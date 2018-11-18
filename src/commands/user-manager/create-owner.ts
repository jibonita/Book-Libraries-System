import { ILibrary } from './../../contracts/models/library';
import { IGlobalDatabase, ICommand, IModelsFactory, IOwner, IUser} from "../../contracts";
import { Constants } from "../../common/constants";
import { injectable, inject } from "inversify";
import { TYPES } from "../../common/types";
import { Search } from '../search-manager';

@injectable()
export class AddOwner implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase, @inject(TYPES.modelsFactory) factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // AddOwner username library
    public execute(parameters: string[]): string {
        const [username, library] = parameters;
  
        // const foundUser: IUser = <IUser>(this._data.userDatabase.find((user: IUser) => user.name === username));
        // if (!foundUser) {
        //     throw new Error(Constants.getUserNotExistErrorMessage(username));
        // }
        const foundUser: IUser = <IUser>(Search.findUser(this._data, username));

        const foundUserIndex: number = this._data.userDatabase.findIndex((user: IUser) => user.name === foundUser.name);
        if (foundUserIndex === -1) {
          throw new Error(Constants.getUserNotExistErrorMessage(username));
        }
        
        this._data.userDatabase.splice(foundUserIndex, 1);

        // const foundLibrary: ILibrary = <ILibrary>(this._data.libraryDatabase.find((library: ILibrary) => library.owner === foundUser.name));
        // if (!foundLibrary) {
        //     throw new Error(Constants.getLibraryNotFoundErrorMessage(library));
        // }
        const foundLibrary: ILibrary = <ILibrary>(Search.findLibrary(this._data, library));

        const owner: IUser = this._factory.addOwner(foundUser.name, foundUser.password, foundLibrary.address, foundLibrary.bookList);
        this._data.userDatabase.push(owner);
    
        return Constants.getOwnerCreatedSuccessMessage(username);
    }
  }
  