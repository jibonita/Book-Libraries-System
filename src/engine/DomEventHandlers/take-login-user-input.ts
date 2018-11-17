import { ITakeUserInput } from "../../contracts/engine/event_handlers/take-user-input";
import { Constants } from "../../common/constants";
import { Labels } from "../../common/label-constants";

export class TakeLoginUserInput implements ITakeUserInput{
    public  takeInput(): string{
        const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('login_name'));
        const password: HTMLInputElement = <HTMLInputElement>(document.getElementById('login-password'));
        
        if (userName.value.length === 0 || password.value.length === 0) {
            throw new Error(Constants.getWrongLoginErrorMessage());
        }

        // temp here. Move to Login command
        localStorage.setItem(Labels.lsActiveUsername, userName.value);

        const commandText: string =  `LoginUser ${userName.value} ${password.value}`;
        
        return commandText;
    }
}

