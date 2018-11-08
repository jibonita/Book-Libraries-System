import { inject, injectable } from "inversify";
import { TYPES } from "../../common/types";
import { BookTracker } from './../../models/book-tracker';
import { ICommand, IGlobalDatabase, IModelsFactory, ILibrary } from "../../contracts";
import { Constants } from "../../common/constants";

@injectable()
export class ListTakenBooks implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(
        @inject(TYPES.globalDatabase) data: IGlobalDatabase, 
        @inject(TYPES.modelsFactory) factory: IModelsFactory) {
   // public constructor( data: IGlobalDatabase, factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // command: ListTakenBooks libraryName
    public execute(parameters: string[]): string {
      const [name] = parameters;

      const foundLibrary: ILibrary | undefined = this._data.libraryDatabase.find((library: ILibrary) => library.name === name);
      if (!foundLibrary) {
        throw new Error(Constants.getLibraryNotFoundErrorMessage(name));
    }
          
    const libraryTakenBooksList: string = foundLibrary.bookList
        .filter((bookTrack: BookTracker) => bookTrack.book.availability === false)
        .map((book: BookTracker)  => book.book.title.toString())
        .join('\n');

  
      return libraryTakenBooksList;
    }
  }