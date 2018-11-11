import { inject, injectable } from 'inversify';

//@injectable()
export class TakeUserInput {//implements ITakeUserInput {

  public static actionName: string = '';
  public static takeInput(){
    const action: string = TakeUserInput.toUpperCase(TakeUserInput.actionName);
    const actionMethod: string = `take${action}UserInput`;
    //return TakeUserInput[actionMethod]();
    return TakeUserInput.executeAction(actionMethod);
    //return TakeUserInput['takeUserRegisterInput']();
    //return TakeUserInput.takeUserRegisterInput();
    //return TakeUserInput.takeUserLoginInput();
  }
  public static executeAction(action:string){
    return TakeUserInput[action]();
  }

  public static takeRegisterUserInput(): string{
      const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
      const password: HTMLInputElement = <HTMLInputElement>(document.getElementById('password'));
      
      if (userName.value.length === 0 || password.value.length === 0) {
        //throw new Error(Constants.getBookNotFoundErrorMessage(bookId));
        throw new Error('Error on register');
      }
      const commandText: string =  
        `AddUser ${userName.value} ${password.value}\r\nAddUser Pesho parola`;
      
      return commandText;
  }

  public static takeLoginUserInput(): string{
    const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('login_name'));
    const password: HTMLInputElement = <HTMLInputElement>(document.getElementById('login-password'));
    
    if (userName.value.length === 0 || password.value.length === 0) {
      //throw new Error(Constants.getBookNotFoundErrorMessage(bookId));
      throw new Error('Error on register');
    }
    const commandText: string =  `LoginUser ${userName.value} ${password.value}`;
    
    return commandText;
}

public static takeCreatelibraryUseryInput(): string{
    const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
    const library: HTMLInputElement = <HTMLInputElement>(document.getElementById('libraryName'));
    const address: HTMLInputElement = <HTMLInputElement>(document.getElementById('address'));
    
    if (address.value.length === 0 || library.value.length === 0) {
      //throw new Error(Constants.getLibraryAddEmptyFieldsErrorMessage(bookId));
      throw new Error('Error on library add read input');
    }
    // AddLibrary gosho NovoLib sofia
    const commandText: string =  
      `AddLibrary ${userName.value} ${library.value} ${address.value}\r\n
      AddOwner ${userName.value} ${address.value}`;
    
    return commandText;
}
private static toUpperCase(text: string) 
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}

}

