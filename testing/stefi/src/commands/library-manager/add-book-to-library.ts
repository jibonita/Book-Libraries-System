import { BookGenre } from './../../enums/book-genre';
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
  
    // AddBookToLibrary libraryName bookName
    public execute(parameters: string[]): string {
        const [libraryName, bookName] = parameters;
    
        const foundLibrary: ILibrary | undefined = this._data.libraryDatabase.find((library: ILibrary) => library.name === libraryName);
        if (!foundLibrary) {
            throw new Error(Constants.getLibraryNotFoundErrorMessage(libraryName));
        }
        
        // sample books
        this._data.bookDatabase.push(new Book('Sherlock','avtor',BookGenre.novel,true));
        this._data.bookDatabase.push(new Book('UncleTom','Hariet',BookGenre.novel,false));
        this._data.bookDatabase.push(new Book('PutuvaneKumSebesi','Blaga D.',BookGenre.novel,false));

        // currently searched by book name but have to search by ID
        //const foundBook: IBook = this._data.bookDatabase[+bookId];
        const foundBook: IBook | undefined = this._data.bookDatabase.find((book: IBook) => book.title === bookName);
        if (!foundBook) {
            throw new Error(Constants.getBookNotFoundErrorMessage(bookName));
        }
        const bookForLib = new BookTracker(foundBook);
        foundLibrary.bookList.push(bookForLib);
    
        return Constants.getBookAddedToLibrarySuccessMessage(foundBook.title, foundLibrary.name);
    }
  }