import { readFile } from 'fs';
import { inject, injectable } from 'inversify';
import { join } from 'path';
import { TYPES } from '../../common/types';
import { IDataFormatter, IReader } from '../../contracts/';

@injectable()
export class FileReader implements IReader {
  private readonly _dataFormatter: IDataFormatter;
  private _commandsFile: string

  public constructor(@inject(TYPES.dataFormatter) dataFormatter: IDataFormatter) {
    this._dataFormatter = dataFormatter;
    this._commandsFile = '../../commands.txt';
  }
  // public constructor(dataFormatter: IDataFormatter) {
  //   this._dataFormatter = dataFormatter;
  // }

  public get commandsFile(): string {
    return this._commandsFile;
  }

  public async read(): Promise<string[]> {
    return new Promise((resolve: (res: string[]) => void, reject: (res: Error) => void): void => {
        //readFile(join(__dirname, '../../commands.txt'), 'utf-8', (err: Error, data: string): void => {
          readFile(join(__dirname, this.commandsFile), 'utf-8', (err: Error, data: string): void => {
            if (err) {
              reject(err);
            }

            resolve(this._dataFormatter.formatData(data));
          }
        );
      }
    );
  }
}
