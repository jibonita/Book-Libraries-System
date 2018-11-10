import { UserType } from './../enums/user-type';
import { IUser } from '../contracts/models';
import { BookTracker } from '.';
export class User implements IUser {

    public borrowedBooks: BookTracker[] = [];
    public booksHistory: BookTracker[] = [];

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

    
    public updateLists(libBook: BookTracker, isBorrow: Boolean = true): void{
        if (isBorrow) {
            this.borrowedBooks.push(libBook);
        } else {
            const bookIndex = this.borrowedBooks.findIndex((tracked:BookTracker) =>
                tracked.book.id === libBook.book.id);
            this.borrowedBooks.splice(bookIndex,1);
            this.booksHistory.push(libBook);
        }
    }

}



