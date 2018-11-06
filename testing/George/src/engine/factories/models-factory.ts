import { injectable } from 'inversify';
import { Libraries, BookGenre, UserType } from '../../enums';
import { IBook, ILibrary, IUser, IModelsFactory } from '../../contracts';
import { User , Owner, Library, Book, BookTracker } from '../../models';

// @injectable()
export class ModelsFactory implements IModelsFactory {
  public addUser(name: string, password: string, userType: UserType): IUser {
    return new User(name, password, userType);
  }

  public addBook(title: string, author: string, genre: BookGenre, availability: boolean): IBook {
    return new Book(title, author, genre, availability);
  }

  public addLibrary(owner: IUser, name: (Libraries| string), bookList: BookTracker[], address: string): ILibrary {
    return new Library(owner, name, address);  
  }
}
