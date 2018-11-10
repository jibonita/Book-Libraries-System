import { ILibrary, IGlobalDatabase, IUser, IBook } from "../../contracts";
import { Constants } from "../../common/constants";
import { BookTracker } from "../../models";

export class Search {
    
    public static findLibrary(db: IGlobalDatabase, name: string): ILibrary | undefined {
      const foundLibrary: ILibrary | undefined = db.libraryDatabase.find((library: ILibrary) => library.name === name);
      if (foundLibrary) {
        throw new Error(Constants.getLibraryExistsErrorMessage(name));
      }
      return foundLibrary;
    }

    public static findUser(db: IGlobalDatabase, username: string): IUser | undefined{
      const foundUser: IUser | undefined = db.userDatabase.find((user:IUser) => user.name === username);
        if (!foundUser) {
        throw new Error(Constants.getUserNotExistErrorMessage(username));
        }
      return foundUser;
    }

    public static findBook(library: ILibrary, bookId: number): BookTracker | undefined {
        const foundBook: BookTracker | undefined  =
            library.bookList.find((libBook: BookTracker) => libBook.book.id === bookId);
        if (!foundBook) {
            throw new Error(Constants.getBookNotFoundErrorMessage(bookId));
        }
        return foundBook;
    }
    
}