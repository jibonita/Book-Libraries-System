import { ICompany, IFurniture } from './../models';

export interface IFuritureDatabase {
  companies: ICompany[];
  furnitures: IFurniture[];
}
