import { UserType } from "./../enums/user-type";
import { ILibrary } from "../contracts/models";
import { User } from "./user";
import { IOwner } from "../contracts/models/owner";

export class Owner extends User implements IOwner {

    private _address: string
    private _library: ILibrary;
constructor(
     _name: string,
     _password: string,
     address: string,
     library: ILibrary) 
    {
    super(
        _name,
        _password,
        UserType.Owner
        );    
        this._address = address;
        this._library = library;
    }

    public get address():string{
        return this._address;
    }
    public get library(): ILibrary{
        return this._library;
    }
    
}