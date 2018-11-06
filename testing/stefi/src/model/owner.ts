import { Library } from './library';
import { UserType } from './../enums/user-type';
import { IUser, ILibrary } from '../contracts/models';
import { User } from './user';

export class Owner extends User implements IUser {

    private _library: ILibrary;
constructor(
     _name: string,
     _password: string,
     private _address: string) 
    {
    super(
        _name,
        _password,
        UserType.Owner
        );    

    this.addLibrary();
    }

    private addLibrary():void{
        const initialLibraryName = `${this.name}Library`;
        this._library = new Library(this, initialLibraryName ,this._address)
    }
}

