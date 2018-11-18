import { inject, injectable } from 'inversify';
import { Constants, TYPES  } from '../../common';
import {
  ICommand,
  IGlobalDatabase,
  IBook,
  ILibrary
} from '../../contracts';
import { Library, BookTracker } from '../../models';

@injectable()

export class SearchBook implements ICommand {
  private readonly _data: IGlobalDatabase;

  public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase) {
    this._data = data;
  }

  public execute(parameters: string[]): string {
    const [searchTerm, searchType, searchedLibrary] = parameters;
    // catch searchType not defined, didn't work with tryCatch :(
        if(searchType === 'bytitle'){
            return this.SeacrhByTitle(searchTerm);
        } else if (searchType === 'byauthor'){
            return this.SeacrhByAuthor(searchTerm);
        }/* else if (searchType === 'inlibrary'){
           return this.SeacrhInLibrary(searchTerm, searchedLibrary);
        }*/ else{
            throw new Error(Constants.searchTypeNotSpecified());
        }
    }

  private SeacrhByTitle(searchTerm: string){
    const matchingBooks: IBook[] = this._data.bookDatabase.filter((book: IBook) => searchTerm.includes(book.title));
    if (!matchingBooks.length) {
      throw new Error(Constants.getBookTitleNotFoundSeachMessage());
    }

    return matchingBooks.join(';');
  }

  private SeacrhByAuthor(searchTerm: string){
    const matchingBooks: IBook[] = this._data.bookDatabase.filter((book: IBook) => searchTerm.includes(book.author));
    if (!matchingBooks.length) {
      throw new Error(Constants.getBookTitleNotFoundSeachMessage());
    }

    return matchingBooks.join(';');
  }

  private SeacrhInLibrary(searchTerm: string, searchedLibrary: string){

  const libraryFound: ILibrary = <ILibrary>this._data.libraryDatabase.find((lib: ILibrary) => lib.name === searchedLibrary);
  if (!libraryFound) {
    throw new Error(Constants.getLibraryNotFoundErrorMessage(searchedLibrary));
  }
// // find a way to get book names from library book list
//   const matchingBooks: IBook[] = libraryFound.bookList   ((book: IBook) => searchTerm.includes(book.title)); 
//   if (!matchingBooks.length) {
//     throw new Error(Constants.getBookTitleNotFoundSeachMessage());
//   }

}

}
