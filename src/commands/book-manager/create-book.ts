import { injectable, inject } from "inversify";
import { TYPES } from "../../common/types";
import { Constants } from "../../common/constants";
import { IGlobalDatabase, ICommand, IModelsFactory, IBook } from "../../contracts";
import { BookGenre } from "../../enums";

@injectable()
export class AddBook implements ICommand {
    private readonly _data: IGlobalDatabase;
    private readonly _factory: IModelsFactory;
  
    public constructor(@inject(TYPES.globalDatabase) data: IGlobalDatabase, @inject(TYPES.modelsFactory) factory: IModelsFactory) {
      this._data = data;
      this._factory = factory;
    }
  
    // AddBook title author genre
    public execute(parameters: string[]): string {
        const [title, author, genre] = parameters;
        
        const bookGenreKeyAsString: string = genre.toLocaleLowerCase();
        const bookGenreKey: keyof typeof BookGenre = <keyof typeof BookGenre>bookGenreKeyAsString;
        const bookGenre: BookGenre = <BookGenre>(BookGenre[bookGenreKey]);
        
        if (bookGenre === undefined) {
          throw new Error(Constants.getGenreNotExistErrorMessage(genre));
        }
        
        const book: IBook = this._factory.addBook(title, author, bookGenre);
        //this._data.bookDatabase.push(book);
        this.addBookToLocalStorage(book);
    
        return Constants.getBookCreatedSuccessMessage(title);
    }

    public addBookToLocalStorage(book: IBook): void {
      const bookDB = this._data.bookDatabase;
      const newBook: IBook = {id: book.id, title:book.title, author:book.author, genre: book.genre };
      bookDB.push(newBook);
      localStorage.setItem('books', JSON.stringify(bookDB));
    }  
  }
