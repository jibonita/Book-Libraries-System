import { Libraries } from "../enums";

// tslint:disable
export class Constants {
  // success messages


  // public static getCompanyCreatedSuccessMessage(companyName: string): string {
  //   return `Company ${companyName} created`;
  // }
  public static getLibraryCreatedSuccessMessage(libraryName: string): string {
    return `Library ${libraryName} created`;
  }

  public static getUserCreatedSuccessMessage(userName: string): string {
      return `User ${userName} created`;
  }

  public static getBookAddedToLibrarySuccessMessage(bookName: string, libraryName: string|Libraries): string {
    return `Book ${bookName} added to library ${libraryName}`;
  }

  public static getBookRemovedSuccessMessage(bookName: string, libraryId: string): string {
    return `Book ${bookName} removed from library ${libraryId}`;
  }

  // error messages
  // public static getInvalidCommandErrorMessage(commandName: string): string {
  //   return `Invalid command name: ${commandName}`;
  // }

  // public static getFurnitureExistsErrorMessage(furnitureModel: string): string {
  //   return `Furniture ${furnitureModel} already exists`;
  // }

  // public static getCompanyExistsErrorMessage(companyName: string): string {
  //   return `Company ${companyName} already exists`;
  // }

  public static getBookNotFoundErrorMessage(bookId: string): string {
    return `Book ${bookId} not found`;
  }

  public static getOwnerNotFoundErrorMessage(ownerName: string): string {
    return `Owner ${ownerName} not found`;
  }

  public static getLibraryNotFoundErrorMessage(libraryName: string): string {
    return `Library ${libraryName} not found`;
  }
}
