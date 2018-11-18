import { HtmlWriter } from './../providers/html-writer';
import { ITakeUserInput } from "../../contracts/engine/event_handlers/take-user-input";
import { Constants } from "../../common/constants";
import { Labels } from "../../common/label-constants";
import { TYPES } from "../../common";
import { inject, injectable } from "inversify";
import { IWriter } from "../../contracts";
import { log } from "util";

@injectable()
export class TakeLoginUserInput implements ITakeUserInput{
    private readonly _writer: IWriter;
    
    constructor(@inject(TYPES.writer) writer: IWriter ) {
        this._writer = writer;
    }
    public  takeInput(): string{
        const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('login_name'));
        const password: HTMLInputElement = <HTMLInputElement>(document.getElementById('login_password'));
        
        if (userName.value.length === 0 || password.value.length === 0) {
            this._writer.write(Constants.getUserRegisterEmptyFieldErrorMessage());
            return '';
        }

        const commandText: string =  `LoginUser ${userName.value} ${password.value}`;
        
        return commandText;
    }
}

