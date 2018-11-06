import { Owner, User, Book, Library } from "../models";
import { IWorkDatabase } from "../contracts/data/iwork-database";

// import { injectable } from 'inversify';

//@injectable()
export class WorkDatabase implements IWorkDatabase {
    private readonly _books: Book[];
  private readonly _owners: Owner[];
  private readonly _users: User[];
  private readonly _libraries: Library[];

  public constructor() {
    this._owners = [];
    this._users = [];
    this._books = [];
    this._libraries = [];
  }

  public get owners(): Owner[] {
    return this.owners;
  }

  public get users(): User[] {
    return this._users;
  }

  public get books(): Book[] {
    return this._books;
  }

  public get libraries(): Library[] {
    return this._libraries;
  }
}
