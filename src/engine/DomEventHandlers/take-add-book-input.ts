import { Labels } from './../../common/label-constants';
import { ITakeUserInput } from "../../contracts/engine/event_handlers/take-user-input";
import { Constants } from "../../common/constants";
import { inject } from 'inversify';
import { IWriter } from '../../contracts';
import { TYPES } from '../../common';

export class TakeAddBookUserInput implements ITakeUserInput{
    private readonly _writer: IWriter;
    
    constructor(@inject(TYPES.writer) writer: IWriter ) {
        this._writer = writer;
    }
    
    public  takeInput(): string{
        
        const userName = localStorage.getItem(Labels.lsActiveUsername);
        const title: HTMLInputElement = <HTMLInputElement>(document.getElementById('book_title'));
        const author: HTMLInputElement = <HTMLInputElement>(document.getElementById('book_author'));
        const genre: HTMLInputElement = <HTMLInputElement>(document.getElementById('book_genre'));
        
        if (title.value.length === 0 || author.value.length === 0|| genre.value.length === 0) {
            this._writer.write(Constants.getBookAddEmptyFieldErrorMessage());
            return '';
        }
        
        // AddBook title author genre
        const commandText: string =  `AddBook ${title.value} ${author.value} ${genre.value}\n\r
        AddBookToUserLibrary ${userName}`;
        console.log(commandText);
        
        return commandText;
    }
}

