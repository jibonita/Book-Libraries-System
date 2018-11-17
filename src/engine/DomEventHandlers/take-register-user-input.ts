import { ITakeUserInput } from "../../contracts/engine/event_handlers/take-user-input";
import { Constants } from "../../common/constants";

export class TakeRegisterUserInput implements ITakeUserInput{
    public  takeInput(): string{
        const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
        const password: HTMLInputElement = <HTMLInputElement>(document.getElementById('password'));
        
        if (userName.value.length === 0 || password.value.length === 0) {
            throw new Error(Constants.getUserRegisterEmptyFieldErrorMessage());
        }
        const commandText: string =  
        `AddUser ${userName.value} ${password.value}`;
        
        return commandText;
    }
}

