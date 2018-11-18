import { Libraries, BookGenre, UserType } from '../../../enums';
import { IBook, ILibrary, IUser, IOwner } from '../../../contracts/models';
import {  BookTracker } from '../../../models';
export interface IModelsFactory {
  addUser(name: string, password: string): IUser;
  
  addOwner(name: string, password: string, address: string, library: ILibrary): IUser;

  addBook(title: string, author: string, genre: BookGenre): IBook;

  addBookTracker(book: IBook, user: IUser, checkoutDate: string): BookTracker;

  addLibrary(owner: string, name: (Libraries| string), address: string): ILibrary;
}


