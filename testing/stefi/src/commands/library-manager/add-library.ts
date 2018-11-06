import { ICommand, IModelsFactory } from "../../contracts";
import { Owner, Library } from "../../models";
import { IWorkDatabase } from "../../contracts/data/iwork-database";
import { ILibrary } from "../../contracts/models";

export class AddLibrary implements ICommand {
    private readonly _data: IWorkDatabase;
    private readonly _factory: IModelsFactory;
  
    //public constructor(@inject(TYPES.modelsFactory) factory: IModelsFactory) {
    public constructor( data: IWorkDatabase, factory: IModelsFactory) {
      this._data = data;
     this._factory = factory;
    }
  
    // command: AddLibrary owner name address
    public execute(parameters: string[]): string {
      const [ownerId, name, address] = parameters;
  
      const owner: Owner = this._data.owners[+ownerId];
      
      // Will we check if library with such name exists?? 
      // libraries db or enum?
      // if (library With this name exists) {
      //   throw new Error(Constants.getLibaryExistsErrorMessage(name));
      // }
      
  
      const library: ILibrary = this._factory.addLibrary(owner, name, address);
      //push library to libraries db??;
      this._data.libraries.push(library);
  
      return ''; // Constants.getTableCreatedSuccessMessage(model);
    }
  }