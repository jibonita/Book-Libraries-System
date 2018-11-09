import { Book } from "./book";
import { User } from "./user";
import { IBook } from "../contracts";
export class BookTracker {
    


    constructor(
        private _book: IBook,
        private currentUser: User ,
        private dateTaken: string,
        private dateToReturn: string, 
        private _availability: Boolean) {
   
           // set this._....
   }

    public get book(): IBook{
        return this._book;
    }

    public get availability(): Boolean{
        return this._availability;
    };
}