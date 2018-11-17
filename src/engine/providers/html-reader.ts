import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { IDataFormatter, IReader } from '../../contracts';
import { TakeUserInput } from '../DomEventHandlers'
@injectable()
export class HtmlReader implements IReader {
  private readonly _dataFormatter: IDataFormatter;

  public constructor(@inject(TYPES.dataFormatter) dataFormatter: IDataFormatter) {
    this._dataFormatter = dataFormatter;
  }
  

  public async read(): Promise<string[]> {
    
    const containerElementValue: string = TakeUserInput.takeInput();

    if (containerElementValue.length>0) {
      const formattedData: string[] = this._dataFormatter.formatData(containerElementValue);

      return Promise.resolve(formattedData);
    } else {
      return Promise.resolve([]);
    }
  }
}
