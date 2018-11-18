import { injectable } from 'inversify';
import { IGlobalDatabase, IUser, ILibrary, IBook } from '../contracts';

@injectable()
export class GlobalDatabaseLocal implements IGlobalDatabase {

  private readonly _users: IUser[];
  private readonly _libraries: ILibrary[];
  private readonly _books: IBook[];
  
  public constructor() {
    this._users = [];
    this._libraries = [];
    this._books = [];
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

  push(source: any[], value: any): void {
    source.push(value);
  }
}
