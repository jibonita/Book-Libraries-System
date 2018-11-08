import { ICommand, IModelsFactory, IGlobalDatabase } from "../../contracts";
import { ILibrary, IUser } from "../../contracts/models";
import { Constants } from "../../common/constants";
import { Owner } from "../../models";
import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";

@injectable()
export class AddLibrary implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(
        @inject(TYPES.globalDatabase) data: IGlobalDatabase, 
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
   // public constructor( data: IGlobalDatabase, factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // command: AddLibrary owner name address
    public execute(parameters: string[]): string {
      const [ownerNameId, name, address] = parameters;

      this._data.ownerDatabase.push(new Owner('gosho', 'psd', 'plovdiv'));
      
      const foundOwner: IUser | undefined = this._data.ownerDatabase.find((owner:IUser) => owner.name === ownerNameId);
      
      if (!foundOwner) {
        throw new Error(Constants.getOwnerNotFoundErrorMessage(ownerNameId));
      }

      const foundLibrary: ILibrary | undefined = this._data.libraryDatabase.find((library: ILibrary) => library.name === name);
      if (foundLibrary) {
        throw new Error(Constants.getOwnerNotFoundErrorMessage(ownerNameId));
      }
          
      const library: ILibrary = this._factory.addLibrary(foundOwner, name, address);
      
      this._data.libraryDatabase.push(library);
  
      return Constants.getLibraryCreatedSuccessMessage(name);
    }
  }