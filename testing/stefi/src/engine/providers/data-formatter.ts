import { injectable } from 'inversify';
import { IDataFormatter } from './../../contracts';

//@injectable()
export class DataFormatter implements IDataFormatter {
  public formatData(data: string): string[] {
    return data
      .trim()
      .split(/\n|\r\n/)
      .filter((x: string) => x !== '')
      .filter((x: string) => !x.startsWith('//'))
      .map((x: string) => x.trim());
  }
}
