import { Libraries } from "../enums/library";
import { IPerson } from "./iadd-user";

export interface ILibrary {
    owner: IPerson;
    name: Libraries;
    bookList: Book[];
    address: string;
}