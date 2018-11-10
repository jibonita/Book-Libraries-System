// tslint:disable-next-line
import "reflect-metadata";
import { container } from "./common/ioc.config";
import { TYPES } from "./common/types";
import { ICommandFactory, ICommandProcessor, IDataFormatter, IReader, IWriter, IEngine, IModelsFactory, IGlobalDatabase } from "./contracts";
import { CommandFactory, CommandProcessor, DataFormatter, FileReader, ConsoleWriter, Engine, ModelsFactory } from "./engine";
import { GlobalDatabase } from "./data";


console.log("type");



//const data: IGlobalDatabase = new GlobalDatabase();
// const modelsFactory: IModelsFactory = new ModelsFactory();

// const commandFactory: ICommandFactory = new CommandFactory(data, modelsFactory);
// const commandProcessor: ICommandProcessor = new CommandProcessor(commandFactory);

// const dataFormatter: IDataFormatter = new DataFormatter();
// const fileReader: IReader = new FileReader(dataFormatter);
// const consoleWriter: IWriter = new ConsoleWriter();

// const runInLocalEnvironment: () => void = (): void => {
//     const engine: IEngine = new Engine(commandProcessor, fileReader, consoleWriter);
//     engine.start();
// };

//runInLocalEnvironment();

const runInBrowserEnvironment: () => void = (): void => {
  const runButton: HTMLButtonElement = <HTMLButtonElement>(document.getElementById('run'));
  //const engine: IEngine = new Engine(commandProcessor, htmlReader, htmlWriter);
  //const engine: IEngine = container.get<IEngine>(TYPES.engine);
  //runButton.addEventListener('click', () => engine.start());
};

const runInLocalEnvironment: () => void = (): void => {
  const containerEngine: IEngine = container.get<IEngine>(TYPES.engine);
  containerEngine.start();
};

runInLocalEnvironment();

// runInBrowserEnvironment();