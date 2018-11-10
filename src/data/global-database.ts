import { injectable } from 'inversify';
import { IGlobalDatabase, IUser, ILibrary, IBook } from '../contracts';

@injectable()
export class GlobalDatabase implements IGlobalDatabase {
  private readonly _users: IUser[];
  private readonly _libraries: ILibrary[];
  private readonly _books: IBook[];
  private readonly _owners: IUser[];
  
  public constructor() {
    this._users = [];
    this._libraries = [];
    this._books = [];
    this._owners = [];
  }

  public get userDatabase(): IUser[] {
    return this._users;
  }
  public get ownerDatabase(): IUser[] {
    return this._owners;
  }

  public get libraryDatabase(): ILibrary[] {
    return this._libraries;
  }
  public get bookDatabase(): IBook[] {
    return this._books;
  }
}
