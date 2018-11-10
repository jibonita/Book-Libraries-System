import { UserType } from './../enums/user-type';
import { IUser } from '../contracts/models';
export class User implements IUser {

constructor(
    private _name: string,
    private _password: string,
    private _userType: UserType = UserType.User )     {    }

public get name():string{
    return this._name;
}
public get password():string{
    return this._password;
}
public get userType():UserType{
    return this._userType;
}

}



