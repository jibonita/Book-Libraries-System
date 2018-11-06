import { IWorkDatabase } from './../../contracts/data/iwork-database';
import { ICommand, ILibrary } from "../../contracts";
import { Library, Book, BookTracker } from '../../models';

export class AddBookToLibrary implements ICommand {
    private readonly _data: IWorkDatabase;
  
    // public constructor(@inject(TYPES.furnitureDatabase) data: IFuritureDatabase) {
    public constructor(data: IWorkDatabase) {
      this._data = data;
    }
  
    // AddBookToLibrary libraryId bookId
        public execute(parameters: string[]): string {
        const [libraryId, bookId] = parameters;
    
        const foundLibrary: ILibrary = this._data.libraries[+libraryId];
        //   if (!foundLibrary) {
    //     throw new Error(Constants.getCompanyNotFoundErrorMessage(companyName));
    //   }
  
        const foundBook: Book = this._data.books[+bookId];
    //   if (!foundFurniture) {
    //     throw new Error(Constants.getFurnitureNotFoundErrorMessage(furnitureModel));
    //   }
        const bookforLib = new BookTracker(foundBook);
        foundLibrary.bookList.push(bookforLib);
    
        return ''; //Constants.getFurnitureAddedSuccessMessage(furnitureModel, companyName);
    }
  }