import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { IDataFormatter, IReader } from '../../contracts';

@injectable()
export class HtmlReader implements IReader {
  private readonly _dataFormatter: IDataFormatter;

  public constructor(@inject(TYPES.dataFormatter) dataFormatter: IDataFormatter) {
    this._dataFormatter = dataFormatter;
  }

  public async read(): Promise<string[]> {
    const containerElement: HTMLInputElement = <HTMLInputElement>(document.getElementById('input'));

    if (containerElement) {
      const formattedData: string[] = this._dataFormatter.formatData(containerElement.value);

      return Promise.resolve(formattedData);
    } else {
      return Promise.resolve([]);
    }
  }
}
