import { IBook } from "./book";
import { IUser } from ".";

export interface IBookTracker {
    book: IBook;
    availability: Boolean;
    currentUser: IUser;
    dateTaken: string;
    dateToReturn: string; 
}