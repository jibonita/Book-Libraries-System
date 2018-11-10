import { IBook } from "../contracts/models/book";
import { BookGenre } from "../enums/book-genre";

export class Book implements IBook {
    public static bookId:number = 0;
    private readonly _id: number;
    private readonly _title: string;
    private readonly _author: string;
    private readonly _genre: BookGenre;

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

        Book.bookId += 1;
        this._id = Book.bookId;
        this._title = title;
        this._author = author;
        this._genre = genre;
    }

    public get id(): number {
        return this._id;
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
