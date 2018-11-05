import { BookGenre } from '../enums/book-genre';
import { Libraries } from "../enums/library";
export interface IBook {
  title: string;
  authors: string;
  genre:BookGenre;
  availability: Libraries;
 // If partOfSeries is true we need to implement ISeries


}