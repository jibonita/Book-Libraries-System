import { Book } from "./book";
import { User } from "./user";
import { IBook, IUser } from "../contracts";
export class BookTracker {
    private readonly borrowPeriod = 20;
    private _currentUser: IUser |null = null;
    private _dateTaken: string = '';
    private _dateToReturn: string = ''; 
    private _availability: Boolean = true;

  constructor(private _book: IBook) {
    
  }

  public get book(): IBook {
    return this._book;
  }

  public get availability(): Boolean {
    return this._availability;
  }
  public set currentUser(value: IUser){
    this._currentUser = value;
  }
  public set dateTaken(value: string){
    this._dateTaken =  value;
  }
  public set dateToReturn(value: string){
    this._dateToReturn =  value;
  } 


  public borrow(user: IUser){
     this._availability = false;
     this.currentUser = user;
     
     const today = new Date();
     this.dateTaken = today.toLocaleDateString();
     this.dateToReturn = today.setDate(today.getDate() + this.borrowPeriod).toLocaleString();
  }
}
