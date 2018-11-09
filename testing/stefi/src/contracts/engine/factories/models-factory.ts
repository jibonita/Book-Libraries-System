import { Libraries, BookGenre, UserType } from '../../../enums';
import { IBook, ILibrary, IUser } from '../../../contracts/models';
import {  BookTracker } from '../../../models';
export interface IModelsFactory {
  addUser(name: string, password: string): IUser;
  
  addOwner(user: IUser, address: string): IUser;

  addBook(title: string, author: string, genre: BookGenre): IBook;

  addLibrary(owner: IUser, name: (Libraries| string), address: string): ILibrary;
}


