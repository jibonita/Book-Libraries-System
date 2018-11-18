import { Labels } from './../../common/label-constants';
import { ITakeUserInput } from "../../contracts/engine/event_handlers/take-user-input";
import { Constants } from "../../common/constants";
import { inject } from 'inversify';
import { IWriter } from '../../contracts';
import { TYPES } from '../../common';

export class TakeCreateLibraryUserInput implements ITakeUserInput{
    private readonly _writer: IWriter;
    
    constructor(@inject(TYPES.writer) writer: IWriter ) {
        this._writer = writer;
    }
    
    public  takeInput(): string{
        //const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
        const userName = localStorage.getItem(Labels.lsActiveUsername);
        const library: HTMLInputElement = <HTMLInputElement>(document.getElementById('library_name'));
        const address: HTMLInputElement = <HTMLInputElement>(document.getElementById('library_address'));
        
        if (address.value.length === 0 || library.value.length === 0) {
            this._writer.write(Constants.getLibraryAddEmptyFieldsErrorMessage());
            return '';
        }
        // AddLibrary gosho NovoLib sofia
        const commandText: string =  
            `AddLibrary ${userName} ${library.value} ${address.value}\r\n
            AddOwner ${userName} ${library.value}`;
        
        return commandText;
    }
}

