import { IGlobalDatabase, ICommand, IModelsFactory, IUser } from "../../contracts";
import { Constants } from "../../common/constants";
import { injectable, inject } from "inversify";
import { TYPES } from "../../common/types";
import { Labels } from "../../common/label-constants";

@injectable()
export class LoginUser implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase, @inject(TYPES.modelsFactory) factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    public execute(parameters: string[]): string {
        const [name, password] = parameters;
  
        const foundUser: IUser = <IUser>this._data.userDatabase
                                .find((user: IUser) => user.name === name && user.password === password);
        if (!foundUser) {
             throw new Error(Constants.getWrongLoginErrorMessage());
        }
        
        localStorage.setItem(Labels.lsActiveUsername, name);
        // show menu
    
        return Constants.getUserLoginSuccessMessage(name);
    }
  }
  