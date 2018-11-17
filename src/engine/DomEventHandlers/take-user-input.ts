import { inject, injectable } from 'inversify';
import { TextModifier } from '../../common/text-modifier';
import { ITakeUserInput } from '../../contracts/engine/event_handlers/take-user-input';

//@injectable()
export class TakeUserInput implements ITakeUserInput {

  public static actionName: string = '';
  public static actionMethod: string = '';
  public static takeInput(){
    const action: string = TextModifier.dashToCapitalize(TakeUserInput.actionName);
    TakeUserInput.actionMethod = `take${action}UserInput`;
    return TakeUserInput.executeAction(action);
  }

  public static executeAction(actionMethod: string): void {
    return TakeUserInput[actionMethod];
  }


  public static takeRegisterUserInput(): string{
      const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
      const password: HTMLInputElement = <HTMLInputElement>(document.getElementById('password'));
      
      if (userName.value.length === 0 || password.value.length === 0) {
        //throw new Error(Constants.getUserRegisterEmptyFieldErrorMessage(bookId));
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

  public static takeCreateLibraryUserInput(): string{
      const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
      const library: HTMLInputElement = <HTMLInputElement>(document.getElementById('library_name'));
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




}

