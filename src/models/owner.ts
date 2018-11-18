import { Library } from "./lilbrary";
import { UserType } from "./../enums/user-type";
import { IUser, ILibrary } from "../contracts/models";
import { User } from "./user";
import { IOwner } from "../contracts/models/owner";
import { BookTracker } from ".";
export class Owner extends User implements IOwner {

constructor(
     _name: string,
     _password: string,
     private _address: string,
     private _library: BookTracker[]) 
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
    public get library():BookTracker[]{
        return this._library;
    }
    
}