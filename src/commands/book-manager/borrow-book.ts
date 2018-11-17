import { UpdateFields, Search } from '..';
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

        // const foundLibrary: ILibrary | undefined = this._data.libraryDatabase.find((library: ILibrary) => library.name === libraryName);
        // if (!foundLibrary) {
        //     throw new Error(Constants.getLibraryNotFoundErrorMessage(libraryName));
        // }
        const foundLibrary: ILibrary | undefined = Search.findLibrary(this._data, libraryName);
      
        
        // const foundUser: IUser | undefined = this._data.userDatabase.find((user:IUser) => user.name === username);
        // if (!foundUser) {
        // throw new Error(Constants.getUserNotExistErrorMessage(username));
        // }
        const foundUser: IUser | undefined = Search.findUser(this._data, username);

        // const foundBook: BookTracker | undefined  = foundLibrary.bookList.find((libBook: BookTracker) => libBook.book.title === bookId);
        // if (!foundBook) {
        //     throw new Error(Constants.getBookNotFoundErrorMessage(+bookId));
        // }
        
        let resultMsg: string = '';
        if (foundLibrary) {
            const foundBook: BookTracker | undefined = Search.findBookInLibrary(foundLibrary, +bookId);
            if (foundBook && foundUser) {
                this.updateFieldsStatus(foundBook, foundUser);

                if (foundBook.currentUser !== null ) {
                    resultMsg =  Constants.getBorrowedBookSuccessMessage(foundBook.book.title, foundBook.currentUser.name);
                }
            }
        }
         
        return resultMsg;//Constants.getBorrowedBookSuccessMessage(foundBook.book.title, username);
    }

    private updateFieldsStatus(book: BookTracker, user: IUser){
        const updater: UpdateFields = new UpdateFields(book, user);
        updater.updateUserList();
        updater.updateBookAvailability();
    }
      
  }