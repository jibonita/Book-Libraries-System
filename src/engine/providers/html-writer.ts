import { injectable } from 'inversify';
import { IWriter } from './../../contracts';

@injectable()
export class HtmlWriter implements IWriter {
  public write(output: string): void {
    const containerElement: HTMLDivElement = <HTMLDivElement>(document.getElementById('result'));
    containerElement.innerText = output;
  }
}
