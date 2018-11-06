import { Owner, User, Book, Library } from "../../models";
import { ILibrary } from "../models";

export interface IWorkDatabase {
  owners: Owner[];
  users: User[];
  books: Book[];
  libraries: ILibrary[];
}
