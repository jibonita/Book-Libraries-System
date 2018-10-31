import { ILibrary } from "../interface/ilibrary";
import { IPerson } from "../interface/iperson";
import { Libraries } from "../enums/library";

class Library implements ILibrary {
  private readonly _owner: IPerson;
  private readonly _name: Libraries;
  private readonly _bookList: Book[];
  private readonly _address: string;

  public constructor(owner: IPerson, name: Libraries, libraryAddress: string) {
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
  public get bookList(): Book[] {
      return this._bookList;
  }
  public get address(): string {
      return this._address;
  }
}
