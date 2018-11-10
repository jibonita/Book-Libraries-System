import { IUser, ILibrary, IBook } from "../models";

export interface IGlobalDatabase {
  userDatabase: IUser[];
  ownerDatabase: IUser[];
  libraryDatabase: ILibrary[];
  bookDatabase: IBook[];
}
