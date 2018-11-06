import { UserType } from './../enums/user-type';
import { IUser } from '../contracts/models';
export class User implements IUser {
    name: string;
    password: string;
    userType: UserType;

constructor(
    private _name: string,
    private _password: string,
    private _userType: UserType = UserType.User ) 
    
    {

    
    }










}


// @injectable()
// export class CreateUser implements ICommand {
//   private readonly _data: IFuritureDatabase;
//   private readonly _factory: IModelsFactory;

//   public constructor(@inject(TYPES.furnitureDatabase) data: IFuritureDatabase, @inject(TYPES.modelsFactory) factory: IModelsFactory) {
//     this._data = data;
//     this._factory = factory;
//   }

//   public execute(parameters: string[]): string {
//     const [companyName, companyRegistrationNumber] = parameters;

//     if (this._data.companies.find((company: ICompany) => company.name === companyName)) {
//       throw new Error(Constants.getCompanyExistsErrorMessage(companyName));
//     }

//     const newCompany: ICompany = this._factory.createCompany(companyName, companyRegistrationNumber);
//     this._data.companies.push(newCompany);

//     return Constants.getCompanyCreatedSuccessMessage(companyName);
//   }
// }
