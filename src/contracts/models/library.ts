import { Libraries } from "../../enums/library";
import { IUser } from "./user";
import { BookTracker } from "../../models";

export interface ILibrary {
    owner: string;
    name: (Libraries | string);
    bookList: BookTracker[];
    address: string;
}