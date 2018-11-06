import { injectable } from 'inversify';
import { IWriter } from './../../contracts/';

@injectable()
export class ConsoleWriter implements IWriter {
  public write(output: string): void {
    console.log(output);
  }
}
