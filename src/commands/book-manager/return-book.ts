import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";
import { Constants } from "../../common/constants";
import { ICommand, IModelsFactory, IGlobalDatabase, IUser } from "../../contracts";
import { BookTracker } from "../../models";
import { Search } from "..";

@injectable()
export class ReturnBook implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(
        @inject(TYPES.globalDatabase) data: IGlobalDatabase, 
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // command: ReturnBook username bookId
    public execute(parameters: string[]): string {
        const [username, bookId] = parameters;

        // const foundUser: IUser | undefined = this._data.userDatabase.find((user:IUser) => user.name === username);
        // if (!foundUser) {
        // throw new Error(Constants.getUserNotExistErrorMessage(username));
        // }
        const foundUser = Search.findUser(this._data, username);

        // currently searched by book name but have to search by ID
        const foundBook: BookTracker | undefined  =
             foundLibrary.bookList.find((libBook: BookTracker) => libBook.book.title === bookId);
        if (!foundBook) {
            throw new Error(Constants.getBookNotFoundErrorMessage(bookId));
        }
        
        this.updateFieldsStatus(foundBook, foundUser);
        
        return Constants.getBorrowedBookSuccessMessage(foundBook.book.title, username);
    }

    private updateFieldsStatus(book: BookTracker, user: IUser){
        const updater: UpdateList = new UpdateList(book, user);
        updater.updateBookAvailability();
        updater.updateUserList();
    }
  }