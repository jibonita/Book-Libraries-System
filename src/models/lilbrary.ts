import { ILibrary } from "../contracts/models/library";
import { IUser } from "../contracts/models/user";
import { Libraries } from "../enums/library";
import { BookTracker } from "./book-tracker";

export class Library implements ILibrary {
  private readonly _owner: string;
  private readonly _name: (Libraries| string);
  private readonly _bookList: BookTracker[];
  private readonly _address: string;

  public constructor(owner: string, name: (Libraries| string), libraryAddress: string) {
      // TODO: Validation...
    this._owner = owner;
    this._name = name;
    this._address = libraryAddress;
    this._bookList = [];
  }

  public get owner(): string {
      return this._owner;
  }
  public get name(): (Libraries | string) {
      return this._name;
  }
  public get bookList(): BookTracker[] {
      return this._bookList;
  }
  public get address(): string {
      return this._address;
  }

}
