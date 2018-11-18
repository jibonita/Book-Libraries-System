import { injectable } from 'inversify';
import { Libraries, BookGenre, UserType } from '../../enums';
import { IBook, ILibrary, IUser, IModelsFactory, IOwner } from './../../contracts';
import { User , Library, Book, Owner, BookTracker } from '../../models';

@injectable()
export class ModelsFactory implements IModelsFactory {
  public addUser(name: string, password: string): IUser {
    return new User(name, password);
  }
  
  public addOwner(name: string, password: string, address: string, library: BookTracker[] ): IUser {
    return new Owner(name, password, address, library);
  }
  
  public addBook(title: string, author: string, genre: BookGenre): IBook {
    return new Book(title, author, genre);
  }
  public addBookTracker(book: IBook): BookTracker {
    throw new Error("Method addBookTracker not implemented.");
  }

  public addLibrary(owner: string, name: (Libraries| string), address: string): ILibrary {
    return new Library(owner, name, address);  
  }
}
