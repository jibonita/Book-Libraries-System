import { IWriter } from "../interface/engine/writer";

export class ConsoleWriter implements IWriter {
  public write(line: string): void {
    console.log(line);
  }
}
