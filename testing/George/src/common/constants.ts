// tslint:disable
export class Constants {
  // success messages


  // public static getCompanyCreatedSuccessMessage(companyName: string): string {
  //   return `Company ${companyName} created`;
  // }

  public static getUserAddedSuccessMessage(user: string,): string {
    return `User with name: ${user} added to database`;
  }

  // public static getFurnitureRemovedSuccessMessage(furnitureModel: string, companyName: string): string {
  //   return `Furniture ${furnitureModel} removed from company ${companyName}`;
  // }

  // error messages
  // public static getInvalidCommandErrorMessage(commandName: string): string {
  //   return `Invalid command name: ${commandName}`;
  // }

  public static getUserExistsErrorMessage(user: string): string {
     return `User with Name: ${user} already exists`;
   }

  // public static getCompanyExistsErrorMessage(companyName: string): string {
  //   return `Company ${companyName} already exists`;
  // }

  // public static getFurnitureNotFoundErrorMessage(furnitureModel: string): string {
  //   return `Furniture ${furnitureModel} not found`;
  // }

  // public static getCompanyNotFoundErrorMessage(companyName: string): string {
  //   return `Company ${companyName} not found`;
  // }
}
