import { IGlobalDatabase, ICommand, IModelsFactory, IUser } from "../../contracts";
import { Constants } from "../../common/constants";
import { injectable, inject } from "inversify";
import { TYPES } from "../../common/types";

@injectable()
export class AddUser implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase, @inject(TYPES.modelsFactory) factory: IModelsFactory) {
    //public constructor(data: IGlobalDatabase, factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // AddUser name password userType
    public execute(parameters: string[]): string {
        const [name, password] = parameters;
  
        if (this._data.userDatabase.find((user: IUser) => user.name === name)) {
             throw new Error(Constants.getUserExistsErrorMessage(name));
        }
        
        const user: IUser = this._factory.addUser(name, password);
        this._data.userDatabase.push(user);
    
        return Constants.getUserCreatedSuccessMessage(name);
    }
  }
  