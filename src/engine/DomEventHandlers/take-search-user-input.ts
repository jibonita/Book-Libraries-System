import { Search } from '../../commands/search-manager/search-item';

// start_search
import { Labels } from '../../common/label-constants';
import { SearchBook } from '../../commands/search-manager/search-for-book';
import { Constants } from "../../common/constants";
import { inject } from 'inversify';
import { IWriter, ICommand } from '../../contracts';
import { TYPES } from '../../common';

export class TakeSearchBookUserInput{
    private readonly _writer: IWriter;
    
    constructor(@inject(TYPES.writer) writer: IWriter ) {
        this._writer = writer;
    }
    
    public takeInput(): string{

        const bookTitle: HTMLInputElement = <HTMLInputElement>(document.getElementById('search_book_title'));
        const bookAuthor: HTMLInputElement = <HTMLInputElement>(document.getElementById('search_book_author'));
        if (!bookTitle.value.length && !bookAuthor.value.length) {
            this._writer.write(Constants.getBookSearchEmptyFieldErrorMessage());
            return '';
        }
        if (bookTitle.value.length && bookAuthor.value.length) {
            this._writer.write(Constants.getBookMultipleSearchMethodErrorMessage());
            return '';
        }
        let commandText: string = ''
        
        if(bookAuthor.value.length === 0){
            commandText = `SearchBook ${bookTitle.value} bytitle`

        }
        else if(bookTitle.value.length === 0){
            commandText = `SearchBook ${bookAuthor.value} byauthor`

        }
        
        return commandText;
    }
}
