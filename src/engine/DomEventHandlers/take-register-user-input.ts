import { ITakeUserInput } from "../../contracts/engine/event_handlers/take-user-input";
import { Constants } from "../../common/constants";
import { IWriter } from "../../contracts";
import { TYPES } from "../../common";
import { inject } from "inversify";

export class TakeRegisterUserInput implements ITakeUserInput{
    private readonly _writer: IWriter;
    
    constructor(@inject(TYPES.writer) writer: IWriter ) {
        this._writer = writer;
    }
    
    public  takeInput(): string{
        const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
        const password: HTMLInputElement = <HTMLInputElement>(document.getElementById('password'));
        
        if (userName.value.length === 0 || password.value.length === 0) {
            this._writer.write(Constants.getUserRegisterEmptyFieldErrorMessage());
            return '';
        }
        const commandText: string =  
        `AddUser ${userName.value} ${password.value}\r\n
        LoginUser ${userName.value} ${password.value}`;
        
        return commandText;
    }
}

