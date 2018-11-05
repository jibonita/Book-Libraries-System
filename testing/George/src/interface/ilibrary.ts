import { Libraries } from "../enums/library";
import { IPerson } from "./iperson";

export interface ILibrary {
    owner: IPerson;
    name: Libraries;
    bookList: Book[];
    address: string;
}