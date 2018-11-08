import { ICommand,  IGlobalDatabase } from "../../contracts";
import { ILibrary,  IBook } from "../../contracts/models";
import { Constants } from "../../common/constants";
import { BookTracker } from "../../models";
import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";

@injectable()
export class RemoveBookFromLibrary implements ICommand {
  private readonly _data: IGlobalDatabase;

  public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase) {
  //  public constructor(data: IGlobalDatabase) {
      this._data = data;
    }

    // RemoveBook library book
  public execute(parameters: string[]): string {
    const [libraryId, bookName] = parameters;

    //const foundLibrary: ILibrary = this._data.libraryDatabase.find((lib: ILibrary) => lib.name === libraryId);
    const foundLibrary: ILibrary = this._data.libraryDatabase[+libraryId];
    if (!foundLibrary) {
      throw new Error(Constants.getLibraryNotFoundErrorMessage(libraryId));
    }

    const foundBookIndex: number = foundLibrary.bookList.findIndex((bookTrack: BookTracker) => bookTrack.book.title === bookName);
    if (foundBookIndex === -1) {
      throw new Error(Constants.getBookNotFoundErrorMessage(bookName));
    }
    
    foundLibrary.bookList.splice(foundBookIndex, 1);

    return Constants.getBookRemovedSuccessMessage(bookName, libraryId);
  }
}
