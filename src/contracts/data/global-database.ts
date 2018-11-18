import { IUser, ILibrary, IBook } from "../models";

export interface IGlobalDatabase {
  userDatabase: IUser[];
  libraryDatabase: ILibrary[];
  bookDatabase: IBook[];

}
