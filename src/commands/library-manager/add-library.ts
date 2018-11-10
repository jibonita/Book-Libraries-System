import { ICommand, IModelsFactory, IGlobalDatabase } from "../../contracts";
import { ILibrary, IUser } from "../../contracts/models";
import { Constants } from "../../common/constants";
import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";

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
  
    // command: AddLibrary ownerName name address
    public execute(parameters: string[]): string {
      const [ownerName, name, address] = parameters;

      const foundOwner: IUser | undefined = this._data.ownerDatabase.find((owner:IUser) => owner.name === ownerName);
      if (!foundOwner) {
        throw new Error(Constants.getOwnerNotFoundErrorMessage(ownerName));
      }

      
      
      // TODO: Check if this owner already has a library
          
      const library: ILibrary = this._factory.addLibrary(foundOwner, name, address);
      
      this._data.libraryDatabase.push(library);
  
      return Constants.getLibraryCreatedSuccessMessage(name, ownerName);
    }
  }