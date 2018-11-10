import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { ITakeUserInput } from '../../contracts';

@injectable()
export class TakeUserInput implements ITakeUserInput {


  public async takeInput(): Promise<HTMLInputElement[]> {

    // add user command name..
    const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
    const password: HTMLInputElement = <HTMLInputElement>(document.getElementById('password'));
    const userInput: HTMLInputElement[] = [userName, password];

    if (userInput.length === 2) {
      console.log("userInput: ", userInput);
      return Promise.resolve(userInput);
    } else {
      return Promise.resolve([]) ;
    }
  }
}
