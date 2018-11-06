import { Libraries } from "../../enums/library";
import { IUser } from "./user";

export interface ILibrary {
    owner: IUser;
    name: (Libraries | string);
    // bookList: Book[];
    address: string;
}