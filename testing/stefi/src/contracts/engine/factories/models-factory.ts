import { Libraries, BookGenre, UserType } from '../../../enums';
import { IBook, ILibrary, IUser } from '../../../contracts/models';
import {  BookTracker } from '../../../models';
export interface IModelsFactory {
  addUser(name: string, password: string): IUser;

  addBook(title: string, author: string, genre: BookGenre, availability: boolean): IBook;

  addLibrary(owner: IUser, name: (Libraries| string), address: string): ILibrary;
}


