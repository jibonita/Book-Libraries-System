import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";
import { Constants } from "../../common/constants";
import { ICommand, IModelsFactory, IGlobalDatabase, IUser, IBook, ILibrary } from "../../contracts";
import { BookTracker } from "../../models";

@injectable()
export class BorrowBook implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(
        @inject(TYPES.globalDatabase) data: IGlobalDatabase, 
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // command: BorrowBook library username bookId
    public execute(parameters: string[]): string {
        const [libraryName, username, bookId] = parameters;

        const foundLibrary: ILibrary | undefined = this._data.libraryDatabase.find((library: ILibrary) => library.name === libraryName);
        if (!foundLibrary) {
            throw new Error(Constants.getLibraryNotFoundErrorMessage(libraryName));
        }
        
        const foundUser: IUser | undefined = this._data.userDatabase.find((user:IUser) => user.name === username);
        if (!foundUser) {
        throw new Error(Constants.getUserNotExistErrorMessage(username));
        }

        // currently searched by book name but have to search by ID
        const foundBook: BookTracker | undefined  = foundLibrary.bookList.find((libBook: BookTracker) => libBook.book.title === bookId);
        if (!foundBook) {
            throw new Error(Constants.getBookNotFoundErrorMessage(bookId));
        }
        
        foundBook.borrow(foundUser);
        //foundUser.updateLists(foundBook); // update takenBooks and bookHistory arrays
        
        return Constants.getBorrowedBookSuccessMessage(foundBook.book.title, username);
    }
  }