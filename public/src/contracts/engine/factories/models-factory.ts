import { MaterialType } from '../../../models/common/material-type';
import { IChair, ICompany, ITable } from '../../models';

export interface IModelsFactory {
  createTable(model: string, materialType: MaterialType, price: number, height: number, length: number, width: number): ITable;

  createChair(model: string, materialType: MaterialType, price: number, height: number, numberOfLegs: number): IChair;

  createCompany(name: string, registrationNumber: string): ICompany;
}
