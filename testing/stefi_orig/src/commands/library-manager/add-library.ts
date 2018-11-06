import { IAddUser } from '../../interface/data/user';
import { BookTracker, Library, SearchResult, User } from "../../model";
import { Libraries } from '../../enums/library';

export class LibraryManager {

    constructor(private library: Library) {
      this.library = new Library(new User('p','p'),Libraries.Stolichna, 'sofia');
    }

    public addBook(book: BookTracker): void {
        if (book === null) {
            throw new Error('Book cannot be null!');
          }
      
          this.library.bookList.push(book);
      }
    
    public removeBook(book: BookTracker): void {
      if (book === null) {
          throw new Error('Book cannot be null!');
        }
    
        const bookIndexInArray: number = this.library.bookList.indexOf(book);
    
        if (bookIndexInArray > -1) {
    
          this.library.bookList.splice(bookIndexInArray, 1);
        } else {
          throw new Error('Book cannot be found!');
        }
      } 
      
    public listTakenBooks(): SearchResult {
      this.library.bookList.filter((bookRecord)=> bookRecord.book.availability === false);
      return new SearchResult();
    }
}