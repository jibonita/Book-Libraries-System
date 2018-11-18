import { injectable } from 'inversify';
import { IGlobalDatabase, IUser, ILibrary, IBook } from '../contracts';

@injectable()
export class GlobalDatabase implements IGlobalDatabase {
  private readonly _users: IUser[];
  private readonly _libraries: ILibrary[];
  private readonly _books: IBook[];
  
  public constructor() {

    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", "[]")
    } 
    this._users = JSON.parse(<any>(localStorage.getItem("users")));
  
    if (!localStorage.getItem("libraries")) {
      localStorage.setItem("libraries", "[]")
    } 
    this._libraries = JSON.parse(<any>(localStorage.getItem("libraries")));
  
    if (!localStorage.getItem("books")) {
      localStorage.setItem("books", "[]")
    } 

    // console.log(localStorage.getItem("users"));
    // console.log(JSON.parse(<any>(localStorage.getItem("users"))));
    console.log(this.userDatabase)
    

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

  push(source: any[], value: any): void {
    
  }

}
