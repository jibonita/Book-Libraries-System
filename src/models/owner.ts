import { UserType } from "./../enums/user-type";
import { ILibrary } from "../contracts/models";
import { User } from "./user";
import { IOwner } from "../contracts/models/owner";

export class Owner extends User implements IOwner {

constructor(
     _name: string,
     _password: string,
     private _address: string,
     private _library: ILibrary) 
    {
    super(
        _name,
        _password,
        UserType.Owner
        );    
    }

    public get address():string{
        return this._address;
    }
    public get library(): ILibrary{
        return this._library;
    }
    
}