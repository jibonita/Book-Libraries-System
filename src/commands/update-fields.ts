import { IUser } from './../contracts/models/user';
import { BookTracker } from './../models/book-tracker';

export class UpdateFields {
  
  constructor(private book: BookTracker, private user: IUser) {
      this.book = book; 
      this.user = user;
  } 

  public updateUserList(){
    //this.user.updateLists(this.book); // method in User class, update takenBooks and bookHistory arrays
    
}
  public updateBookAvailability(){
      this.book.borrow(this.user);
  }
}