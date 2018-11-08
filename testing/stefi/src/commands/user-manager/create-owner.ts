import { IGlobalDatabase, ICommand, IModelsFactory, IUser } from "../../contracts";
import { Constants } from "../../common/constants";
import { injectable, inject } from "inversify";
import { TYPES } from "../../common/types";

@injectable()
export class AddOwner implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase, @inject(TYPES.modelsFactory) factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // AddOwner username address
    public execute(parameters: string[]): string {
        const [username, address] = parameters;
  
        const foundUser: IUser | undefined = this._data.userDatabase.find((user: IUser) => user.name === username);
        if (!foundUser) {
            throw new Error(Constants.getUserNotExistErrorMessage(username));
        }
        
        const user: IUser = this._factory.addOwner(foundUser, address);
        // the usr stays in users db but is also added in owners ??
        this._data.ownerDatabase.push(user);
    
        return Constants.getOwnerCreatedSuccessMessage(username);
    }
  }
  