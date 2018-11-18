import { ICommand, ILibrary, IBook, IGlobalDatabase } from "../../contracts";
import { Library, Book, BookTracker } from '../../models';
import { Constants } from "../../common/constants";
import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";

@injectable()
export class AddBookToLibrary implements ICommand {
    private readonly _data: IGlobalDatabase;
  
    public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase) {
    // public constructor(data: IGlobalDatabase) {
      this._data = data;
    }
  
    // AddBookToLibrary libraryName bookId
    public execute(parameters: string[]): string {
        const [libraryName, bookId] = parameters;
    
        const foundLibrary: ILibrary = <ILibrary>this._data.libraryDatabase.find((library: ILibrary) => library.name === libraryName);
        if (!foundLibrary) {
            throw new Error(Constants.getLibraryNotFoundErrorMessage(libraryName));
        }
        
        const foundBook: IBook = <IBook>this._data.bookDatabase.find((book: IBook) => book.id === +bookId);
        if (!foundBook) {
            throw new Error(Constants.getBookNotFoundErrorMessage(+bookId));
        }
        const bookForLib = new BookTracker(foundBook);
        foundLibrary.bookList.push(bookForLib);
    
        return Constants.getBookAddedToLibrarySuccessMessage(foundBook.title, foundLibrary.name);
    }
  }