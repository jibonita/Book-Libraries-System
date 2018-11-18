import { Libraries } from "../enums";

// tslint:disable
export class Constants {
  // success messages

  public static getBookCreatedSuccessMessage(bookTitle: string): string {
    return `Book ${bookTitle} created`;
  }
  
  public static getLibraryCreatedSuccessMessage(libraryName: string, ownerName: string): string {
    return `Library ${libraryName} with `;//owner ${ownerName} created`;
  }

  public static getUserCreatedSuccessMessage(userName: string): string {
      return `User ${userName} created`;
  }

  public static getSearchSuccessMessage(): string {
    return `Search results are displayed below`;
}
  public static getUserLoginSuccessMessage(userName: string): string {
    return `User ${userName} successfully logged in`;
}
  public static getOwnerCreatedSuccessMessage(name: string): string {
    return `Owner ${name} created`;
}

  public static getBookAddedToLibrarySuccessMessage(bookName: string, libraryName: string|Libraries): string {
    return `Book ${bookName} added to library ${libraryName}`;
  }

  public static getBookRemovedSuccessMessage(bookName: string, libraryId: string): string {
    return `Book ${bookName} removed from library ${libraryId}`;
  }

  // error messages
    public static getInvalidCommandErrorMessage(commandName: string): string {
    return `Invalid command name: ${commandName}`;
  }

  public static getGenreNotExistErrorMessage(genre: string): string {
    return `Genre ${genre} does not exist`;
  }

  public static getUserNotExistErrorMessage(username: string): string {
    return `User ${username} does not exist`;
  }

  public static getUserExistsErrorMessage(username: string): string {
    return `User ${username} already exists`;
  }

  public static searchTypeNotSpecified(): string {
    return `The search type wasn't specified`;
  }

  public static getBookNotFoundErrorMessage(bookId: number): string {
    return `Book ID:${bookId} not found`;
  }

  public static getBookTitleNotFoundSeachMessage(): string {
    return `No book titles matched your search`;
  }

  public static getOwnerNotFoundErrorMessage(ownerName: string): string {
    return `Owner ${ownerName} not found`;
  }

  public static getLibraryNotFoundErrorMessage(libraryName: string): string {
    return `Library ${libraryName} not found`;
  }
  public static getLibraryExistsErrorMessage(libraryName: string): string {
    return `Library ${libraryName} already exists.`;
  }

  public static getBorrowedBookSuccessMessage(book: string, user: string): string {
    return `Book ${book} was borrowed by ${user}.`;
  }
   
  public static getReturnedBookSuccessMessage(book: string, user: string): string {
    return `Book ${book} was returned by ${user}.`;
  }
  public static getBookNotInUserListErrorMessage(book: string, user: string): string {
    return `Book ${book} is not in ${user}'s borrow list.`;
  }

  public static getBookSearchEmptyFieldErrorMessage(): string {
    return `Please search by Title or by Author`;
  }

  public static getBookMultipleSearchMethodErrorMessage(): string {
    return `Please use only one search method`;
  }
  public static getUserRegisterEmptyFieldErrorMessage(): string {
    return `Please fill both username and password fields`;
  }
  public static getBookAddEmptyFieldErrorMessage(): string {
    return `Please fill all book fields`;
  }

  public static getWrongLoginErrorMessage(): string {
    return `User does not exist, please register`;
  }

  public static getLibraryAddEmptyFieldsErrorMessage(): string {
    return `Error on library add`;
  }
}
