import { BookGenre } from '../enums/bookGenre';
import { Libraries } from "../enums/library";
export interface IBooks {
  title: string;
  autors: string;
  isbn: string;
  genre:BookGenre;
  availability: Libraries;

}