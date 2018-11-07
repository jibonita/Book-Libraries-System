import { Book } from "./book";
import { User } from "./user";
import { IBook } from "../contracts";
export class BookTracker {
    

    constructor(private _book: IBook) {
   
           // set this._....
   }
//     constructor(
//         private book: Book,
//         private currentUser: User ,
//          private dateTaken: string,
//           private dateToReturn: string) {
   
//            // set this._....
//    }

    public get book(): IBook{
        return this._book;
    }

}