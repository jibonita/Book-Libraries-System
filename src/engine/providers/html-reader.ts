import { inject, injectable } from 'inversify';
import { TYPES } from '../../common/types';
import { IDataFormatter, IReader } from '../../contracts';
import { TakeUserInput } from '../DomEventHandlers'
import { ITakeUserInput } from '../../contracts/engine/event_handlers/take-user-input';
@injectable()
export class HtmlReader implements IReader {
  private readonly _dataFormatter: IDataFormatter;
  private readonly _userInput: ITakeUserInput;

  public constructor(@inject(TYPES.dataFormatter) dataFormatter: IDataFormatter, 
    @inject (TYPES.userInput) userInput: ITakeUserInput) {
    this._dataFormatter = dataFormatter;
    this._userInput = userInput;
  }
  

  public async read(): Promise<string[]> {
    
    //const containerElementValue: string = TakeUserInput.takeInput();
    const containerElementValue: string = this._userInput.takeInput();

    if (containerElementValue.length>0) {
      const formattedData: string[] = this._dataFormatter.formatData(containerElementValue);

      return Promise.resolve(formattedData);
    } else {
      return Promise.resolve([]);
    }
  }
}
