import { IBook } from "../contracts/models/book";
import { BookGenre } from "../enums/book-genre";

export class Book implements IBook {
    private readonly _title: string;
    private readonly _author: string;
    private readonly _genre: BookGenre;
    public static bookId:number = 0;
    public id:number;

    public constructor(title: string, author: string, genre: BookGenre) {
        if (title.length < 2 || !(title.search(/[^A-Za-z][0-9]/))) {
            throw new Error("Book title must be at less 2 characters long!");
        }
        if (author.length < 3 || !(author.search(/[^A-Za-z][0-9]/))) {
                    throw new Error("The authors name must be at less characters long!");
                }
        if (!BookGenre[genre]) {
            throw new Error("Invalid book genre");
        }

        this._title = title;
        this._author = author;
        this._genre = genre;
        Book.bookId += 1;
        this.id = Book.bookId;

    }

    public get title(): string {
        return this._title;
    }
    public get author(): string {
        return this._author;
    }
    public get genre(): BookGenre {
        return this._genre;
    }
        
    }
