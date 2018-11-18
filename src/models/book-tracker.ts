import { Book } from "./book";
import { User } from "./user";
import { IBook, IUser, IBookTracker  } from "../contracts";

export class BookTracker implements IBookTracker {
    private readonly borrowPeriod = 20;
    private _currentUser!: IUser;
    private _dateTaken!: string;
    private _dateToReturn!: string; 
    private _availability: Boolean = true;

  constructor(private _book: IBook) {  
 
  }

  public get book(): IBook {
    return this._book;
  }

  public get availability(): Boolean {
    return this._availability;
  }

  public get currentUser(): IUser {
    return this._currentUser;
  }

  public get dateTaken(){
    return this._dateTaken;
  }
  public get dateToReturn(){
    return this._dateToReturn;
  } 

  public set availability(value: Boolean) {
    this._availability = value;
  }
  public set currentUser(value: IUser ){
    this._currentUser = value;
  }
  public set dateTaken(value: string){
    this._dateTaken =  value;
  }
  public set dateToReturn(value: string){
    this._dateToReturn =  value;
  } 


  public borrow(user: IUser){
     this.availability = false;
     this.currentUser = user;
     
     const today = new Date();
     this.dateTaken = today.toLocaleDateString();
     this.dateToReturn = today.setDate(today.getDate() + this.borrowPeriod).toLocaleString();
  }

  public clean(){
  //   this.availability = true;
  //   this.currentUser = null;
  //   this.dateTaken = '';
  //   this.dateToReturn = '';
  }
}
