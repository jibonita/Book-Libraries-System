import { injectable } from 'inversify';
import { IGlobalDatabase, IUser, ILibrary, IBook } from '../contracts';

@injectable()
export class GlobalDatabase implements IGlobalDatabase {
  private readonly _users: IUser[];
  private readonly _libraries: ILibrary[];
  private readonly _books: IBook[];
  
  public constructor() {
    this._users = JSON.parse(<any>(localStorage.getItem("users")));
    this._libraries = JSON.parse(<any>(localStorage.getItem("libraries")));
    this._books = JSON.parse(<any>(localStorage.getItem("books")));
  }

  public get userDatabase(): IUser[] {
    return this._users;
  }
  public get libraryDatabase(): ILibrary[] {
    return this._libraries;
  }
  public get bookDatabase(): IBook[] {
    return this._books;
  }
}
