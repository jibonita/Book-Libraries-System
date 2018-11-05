import { BookGenre } from '../enums/bookGenre';
import { Libraries } from "../enums/library";
export interface IBook {
  title: string;
  authors: string;
  genre:BookGenre;
  availability: Libraries;
 // If partOfSeries is true we need to implement ISeries
  partOfSeries: boolean;

}