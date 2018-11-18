import { IUser } from './../contracts/models/user';
import { BookTracker } from './../models/book-tracker';

export class UpdateFields {
  
  constructor(private book: BookTracker, private user: IUser) {
      this.book = book; 
      this.user = user;
  } 

  public updateUserList(){
    if(this.book.availability){
        this.user.updateLists(this.book); 
        //this.user.borrowedBooks.push(this.book);
    } else {
        this.user.updateLists(this.book, false); 

        // const bookIndex = this.user.borrowedBooks.findIndex((tracked:BookTracker) =>
        //     tracked.book.id === this.book.book.id);
        // this.user.borrowedBooks.splice(bookIndex,1);
        // this.user.booksHistory.push(this.book);
    }
}
  public updateBookAvailability(){
      if(this.book.availability){
        this.book.borrow(this.user);
      } else {
        this.book.clean();
      }
      
  }
}