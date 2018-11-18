import { inject, injectable } from 'inversify';
import { Constants, TYPES  } from '../../common';
import {
  ICommand,
  IGlobalDatabase,
  IBook,
  ILibrary
} from '../../contracts';
import { Labels } from "../../common/label-constants";

@injectable()

export class SearchBook implements ICommand {
  private readonly _data: IGlobalDatabase;

  public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase) {
    this._data = data;
  }

  public execute(parameters: string[]): string {
    const [searchTerm, searchType] = parameters;
    // catch searchType not defined, didn't work with tryCatch :(
        if(searchType === 'bytitle'){
            this.SeacrhByTitle(searchTerm);
        } else if (searchType === 'byauthor'){
            this.SeacrhByAuthor(searchTerm);
        } else{
            throw new Error(Constants.searchTypeNotSpecified());
        }
        return Constants.getSearchSuccessMessage();
    }

  private SeacrhByTitle(searchTerm: string){

    const matchingBooks: IBook[] = this._data.bookDatabase.filter((book: IBook) => searchTerm.includes(book.title));
    if (!matchingBooks.length) {
      throw new Error(Constants.getBookTitleNotFoundSeachMessage());
    }

    localStorage.setItem(Labels.searchResult, matchingBooks.join('\n'));
  }

  private SeacrhByAuthor(searchTerm: string){
    const matchingBooks: IBook[] = this._data.bookDatabase.filter((book: IBook) => searchTerm.includes(book.author));
    if (!matchingBooks.length) {
      throw new Error(Constants.getBookTitleNotFoundSeachMessage());
    }
    localStorage.setItem(Labels.searchResult, matchingBooks.join('\n'));
  }
}
