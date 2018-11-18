import { ICommand, ILibrary, IBook, IGlobalDatabase } from "../../contracts";
import { BookTracker, Owner } from '../../models';
import { Constants } from "../../common/constants";
import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";
import { Search } from "..";

@injectable()
export class AddBookToUserLibrary implements ICommand {
    private readonly _data: IGlobalDatabase;
  
    public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase) {
       this._data = data;
    }
  
    // AddBookToUserLibrary username 
    public execute(parameters: string[]): string {
        const [username] = parameters;
    
        const foundUser: Owner = <Owner>Search.findUser(this._data, username);
        const foundLibrary: ILibrary = foundUser.library;
        const foundBook: IBook = this._data.bookDatabase[this._data.bookDatabase.length-1];
                      
        const bookForLib = new BookTracker(foundBook);
        foundLibrary.bookList.push(bookForLib);
    
        return Constants.getBookAddedToLibrarySuccessMessage(foundBook.title, foundLibrary.name);
    }
  }