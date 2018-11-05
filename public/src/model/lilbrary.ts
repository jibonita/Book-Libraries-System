import { ILibrary } from "../interface/ilibrary";
import { IPerson } from "../interface/iperson";
import { Libraries } from "../enums/library";
import { IBook } from "../interface/ibook";

class Library implements ILibrary {
  private readonly _owner: IPerson;
  private readonly _name: Libraries;
  private readonly _bookList: IBook[];
  private readonly _address: string;

  public constructor(owner: IPerson, name: Libraries, libraryAddress: string) {
      // TODO: Validation...
    this._owner = owner;
    this._name = name;
    this._address = libraryAddress;
    this._bookList = [];
  }

  public get owner(): IPerson {
      return this._owner;
  }
  public get name(): Libraries {
      return this._name;
  }
  public get bookList(): IBook[] {
      return this._bookList;
  }
  public get address(): string {
      return this._address;
  }

  // Actions - will these stay in this class??
  // search for book
  public addBook(book: IBook): void {
    if (book === null) {
        throw new Error('Book cannot be null!');
      }
  
      this.bookList.push(book);
  }

  public removeBook(book: IBook): void {
    if (book === null) {
        throw new Error('Book cannot be null!');
      }
  
      const bookFound: IBook | undefined = this.findBookByTitle(book.title);
  
      if (bookFound !== undefined) {
  
        this.bookList.splice(this.bookList.indexOf(bookFound), 1);
      } else {
        throw new Error('Book cannot be found!');
      }
  }

  public containsBook(book: IBook): boolean {
    if (book === null) {
      throw new Error('Book cannot be null!');
    }

    return this.bookList.some((x: IBook) => x.title === book.title);
  }

  public findBookByTitle(title: string): IBook | undefined{
      return this.bookList.find((x: IBook) => x.title === title);
  }

  public findBookByAuthor(authors: string): IBook | undefined{
        return this.bookList.find((x: IBook) => x.authors === authors);
    }
}
