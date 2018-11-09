import { BookGenre } from '../../enums/book-genre';
export interface IBook {
    title: string;
    author: string;
    genre:BookGenre;

}