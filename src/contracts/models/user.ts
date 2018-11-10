import { UserType } from "../../enums/user-type";
import { BookTracker } from "../../models";
export interface IUser{
  name:string,
  password: string,
  userType: UserType;

  borrowedBooks: BookTracker[];
  booksHistory: BookTracker[];
} 