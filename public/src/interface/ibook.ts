import { BookGenre } from '../enums/bookGenre';
import { Libraries } from "../enums/library";
export interface IBook {
  title: string;
  authors: string;
  partOfSeries: boolean;
  genre:BookGenre;
  availability: Libraries;

}