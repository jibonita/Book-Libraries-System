import { BookGenre } from '../../enums/book-genre';
export interface IBook {
  title: string;
  author: string;
  genre:BookGenre;
  //availability: boolean;
 // If partOfSeries is true we need to implement ISeries


}