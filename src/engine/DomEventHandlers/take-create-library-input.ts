import { Labels } from './../../common/label-constants';
import { ITakeUserInput } from "../../contracts/engine/event_handlers/take-user-input";
import { Constants } from "../../common/constants";

export class TakeCreateLibraryUserInput implements ITakeUserInput{
    public  takeInput(): string{
        //const userName: HTMLInputElement = <HTMLInputElement>(document.getElementById('user_name'));
        const userName = localStorage.getItem(Labels.lsActiveUsername);
        const library: HTMLInputElement = <HTMLInputElement>(document.getElementById('library_name'));
        const address: HTMLInputElement = <HTMLInputElement>(document.getElementById('address'));
        
        if (address.value.length === 0 || library.value.length === 0) {
            throw new Error(Constants.getLibraryAddEmptyFieldsErrorMessage());
        }
        // AddLibrary gosho NovoLib sofia
        const commandText: string =  
            `AddLibrary ${userName} ${library.value} ${address.value}\r\n
            AddOwner ${userName} ${address.value}`;
        
        return commandText;
    }
}

