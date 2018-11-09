import { injectable } from 'inversify';
import { Libraries, BookGenre, UserType } from '../../enums';
import { IBook, ILibrary, IUser, IModelsFactory } from './../../contracts';
import { User , Library, Book, Owner } from '../../models';

@injectable()
export class ModelsFactory implements IModelsFactory {
  public addUser(name: string, password: string): IUser {
    return new User(name, password);
  }

  public addOwner(user: IUser, address: string): IUser {
    return new Owner(user.name, user.password, address);
  }

  public addBook(title: string, author: string, genre: BookGenre): IBook {
    return new Book(title, author, genre);
  }

  public addLibrary(owner: IUser, name: (Libraries| string), address: string): ILibrary {
    return new Library(owner, name, address);  
  }
}
