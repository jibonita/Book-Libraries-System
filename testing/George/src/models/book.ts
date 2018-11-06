import { IBook } from "../contracts/models/book";
import { BookGenre } from "../enums/book-genre";
export class Book implements IBook {


constructor(private _title: string,
     private _author: string,
      private _genre: BookGenre,
       private _availability: boolean) {

        // set this._....
}

public get title(): string{
    return this._title;
}; 
public get author(): string{
    return this._author;
};
public get genre(): BookGenre{
    return this._genre;
};
public get availability(): boolean{
    return this._availability;
};



}