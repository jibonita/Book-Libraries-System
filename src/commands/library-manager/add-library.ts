import { ICommand, IModelsFactory, IGlobalDatabase } from "../../contracts";
import { ILibrary, IUser } from "../../contracts/models";
import { Constants } from "../../common/constants";
import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";
import { UserType } from "../../enums";

@injectable()
export class AddLibrary implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(
        @inject(TYPES.globalDatabase) data: IGlobalDatabase, 
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // command: AddLibrary userName name address
    public execute(parameters: string[]): string {
      const [userName, name, address] = parameters;

      const foundUser: IUser = <IUser>this._data.userDatabase.find((user:IUser) => user.name === userName);
      if (!foundUser) {
        throw new Error(Constants.getUserNotExistErrorMessage(userName));
      }
        
      if (foundUser.userType === UserType.Owner) {
        throw new Error("This user already has a library, :(");
      }
          
      const library: ILibrary = this._factory.addLibrary(foundUser.name, name, address);
      
      // this._data.libraryDatabase.push(library);
      this.addLibraryToLocalStorage(library)
  
      return Constants.getLibraryCreatedSuccessMessage(name, userName);
    }


  public addLibraryToLocalStorage(library: ILibrary): void {
    const libraryDB = this._data.libraryDatabase;
    const newLibrary: ILibrary = { owner: library.owner, name: library.name, address: library.address, bookList: library.bookList };
    libraryDB.push(newLibrary);
    localStorage.setItem('libraries', JSON.stringify(libraryDB));
  }  

}