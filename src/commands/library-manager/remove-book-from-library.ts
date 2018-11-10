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

    // RemoveBook libraryName BookId
  public execute(parameters: string[]): string {
    const [libraryName, bookId] = parameters;

    const foundLibrary: ILibrary | undefined = this._data.libraryDatabase.find((library: ILibrary) => library.name === libraryName);
        if (!foundLibrary) {
            throw new Error(Constants.getLibraryNotFoundErrorMessage(libraryName));
        }

    const foundBookIndex: number = foundLibrary.bookList.findIndex((bookTrack: BookTracker) => bookTrack.book.id === +bookId);
    if (foundBookIndex === -1) {
      throw new Error(Constants.getBookNotFoundErrorMessage(+bookId));
    }
    
    foundLibrary.bookList.splice(foundBookIndex, 1);

    return Constants.getBookRemovedSuccessMessage(bookId, libraryName);
  }
}
