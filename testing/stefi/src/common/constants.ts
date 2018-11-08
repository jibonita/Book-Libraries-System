import { Libraries } from "../enums";

// tslint:disable
export class Constants {
  // success messages


  // public static getCompanyCreatedSuccessMessage(companyName: string): string {
  //   return `Company ${companyName} created`;
  // }
  public static getLibraryCreatedSuccessMessage(libraryName: string, ownerName: string): string {
    return `Library ${libraryName} with owner ${ownerName} created`;
  }

  public static getUserCreatedSuccessMessage(userName: string): string {
      return `User ${userName} created`;
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

  public static getUserNotExistErrorMessage(username: string): string {
    return `User ${username} does not exist`;
  }

  public static getUserExistsErrorMessage(username: string): string {
    return `User ${username} already exists`;
  }

  public static getBookNotFoundErrorMessage(bookId: string): string {
    return `Book ${bookId} not found`;
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
}
