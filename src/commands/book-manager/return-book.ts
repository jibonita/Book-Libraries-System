import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";
import { Constants } from "../../common/constants";
import { ICommand, IModelsFactory, IGlobalDatabase, IUser } from "../../contracts";
import { BookTracker } from "../../models";
import { Search, UpdateFields } from "..";

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

        const foundUser: IUser | undefined = Search.findUser(this._data, username);
        const foundBook: BookTracker | undefined = Search.findBookInGlobal(this._data, +bookId);
        
        let resultMsg: string = '';
        
        if (foundBook && foundUser) {
            if (foundBook.currentUser !== null ) {
                if (foundBook.currentUser.name === foundUser.name) {
                    this.updateFieldsStatus(foundBook, foundUser);
                    resultMsg =  Constants.getReturnedBookSuccessMessage(foundBook.book.title, username);
                }
                else{
                    resultMsg = Constants.getBookNotInUserListErrorMessage(foundBook.book.title, username);
                }
            }
            else{
                resultMsg = Constants.getBookNotInUserListErrorMessage(foundBook.book.title, username);
            }
         }
                
        return resultMsg;
    }

    private updateFieldsStatus(book: BookTracker, user: IUser){
        const updater: UpdateFields = new UpdateFields(book, user);
        updater.updateUserList();
        updater.updateBookAvailability();
    }
  }