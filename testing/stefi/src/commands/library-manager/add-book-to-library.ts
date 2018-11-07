import { ICommand, ILibrary, IBook, IGlobalDatabase } from "../../contracts";
import { Library, Book, BookTracker } from '../../models';
import { Constants } from "../../common/constants";

export class AddBookToLibrary implements ICommand {
    private readonly _data: IGlobalDatabase;
  
    // public constructor(@inject(TYPES.furnitureDatabase) data: IFuritureDatabase) {
    public constructor(data: IGlobalDatabase) {
      this._data = data;
    }
  
    // AddBookToLibrary libraryId bookId
    public execute(parameters: string[]): string {
        const [libraryId, bookId] = parameters;
    
        const foundLibrary: ILibrary = this._data.libraryDatabase[+libraryId];
        if (!foundLibrary) {
            throw new Error(Constants.getLibraryNotFoundErrorMessage(libraryId));
        }
  
        const foundBook: IBook = this._data.bookDatabase[+bookId];
        if (!foundBook) {
            throw new Error(Constants.getBookNotFoundErrorMessage(bookId));
        }
        const bookForLib = new BookTracker(foundBook);
        foundLibrary.bookList.push(bookForLib);
    
        return Constants.getBookAddedToLibrarySuccessMessage(foundBook.title, foundLibrary.name);
    }
  }