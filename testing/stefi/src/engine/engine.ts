import { inject, injectable } from 'inversify';
import { TYPES } from '../common/types';
import { ICommandProcessor, IEngine, IReader, IWriter } from '../contracts';

@injectable()
export class Engine implements IEngine {
  private readonly _reader: IReader;
  private readonly _writer: IWriter;
  private readonly _commandProcessor: ICommandProcessor;

  public constructor(
    @inject(TYPES.commandProcessor)  commandProcessor: ICommandProcessor,
    @inject(TYPES.reader) reader: IReader,
    @inject(TYPES.writer) writer: IWriter ) {
  // public constructor(commandProcessor: ICommandProcessor, reader: IReader, writer: IWriter ) {
    this._commandProcessor = commandProcessor;
    this._reader = reader;
    this._writer = writer;
  }

  public async start(): Promise<void> {
    const commands: string[] = await this._reader.read();
    
    const commandResults: string[] = commands.map((command: string) => {
      try {
        return this._commandProcessor.processCommand(command);
      } catch (error) {
        return error.message;
      }
    });

    this._writer.write(commandResults.join('\n'));
  }
}
