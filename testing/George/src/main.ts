
import 'reflect-metadata';
import { container } from './common/ioc.config';
import { TYPES } from './common/types';
import { ICommandProcessor, IEngine, IReader, IWriter } from './contracts';
import {
    CommandFactory,
    CommandProcessor,
    ConsoleWriter,
    DataFormatter,
    Engine,
    FileReader,
    HtmlReader,
    HtmlWriter,
    ModelsFactory
  } from './engine';
const engine: IEngine = new Engine(new StringProcessor(new ConsoleWriter()), new ConsoleReader(), new ConsoleWriter());

engine.start();


const data: IFuritureDatabase = new FurnitureDatabase();
const modelsFactory: IModelsFactory = new ModelsFactory();

const commandFactory: ICommandFactory = new CommandFactory(data, modelsFactory);
const commandProcessor: ICommandProcessor = new CommandProcessor(commandFactory);

const dataFormatter: IDataFormatter = new DataFormatter();
const fileReader: IReader = new FileReader(dataFormatter);
const htmlReader: IReader = new HtmlReader(dataFormatter);

const consoleWriter: IWriter = new ConsoleWriter();
const htmlWriter: IWriter = new HtmlWriter();

const runInLocalEnvironment: () => void = (): void => {
  const engine: IEngine = new Engine(commandProcessor, fileReader, consoleWriter);
  engine.start();
};

const runInBrowserEnvironment: () => void = (): void => {
  const engine: IEngine = new Engine(commandProcessor, htmlReader, htmlWriter);
  engine.start();
};

const runWithContainer: () => void = (): void => {
  const containerEngine: IEngine = container.get<IEngine>(TYPES.engine);
  containerEngine.start();
};

runInBrowserEnvironment();