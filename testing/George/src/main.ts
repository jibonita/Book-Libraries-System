// tslint:disable-next-line

console.log("type");
// import 'reflect-metadata';
// import { container } from './common/ioc.config';
// import { TYPES } from './common/types';
// import {
//   ICommandFactory,
//   ICommandProcessor,
//   IDataFormatter,
//   IEngine,
//   IReader,
//   IWriter
// } from './contracts';
// import {
//   CommandFactory,
//   CommandProcessor,
//   DataFormatter,
//   Engine,
//   HtmlReader,
//   HtmlWriter,
//   } from './engine';

// const commandFactory: ICommandFactory = new CommandFactory(null, null);
// const commandProcessor: ICommandProcessor = new CommandProcessor(commandFactory);

// const dataFormatter: IDataFormatter = new DataFormatter();
// const htmlReader: IReader = new HtmlReader(dataFormatter);
// const htmlWriter: IWriter = new HtmlWriter();


// const runInBrowserEnvironment: () => void = (): void => {
//   const runButton: HTMLButtonElement = <HTMLButtonElement>(document.getElementById('run'));
//   const engine: IEngine = new Engine(commandProcessor, htmlReader, htmlWriter);
//   runButton.addEventListener('click', () => engine.start());
// };

// const runWithContainer: () => void = (): void => {
//   const containerEngine: IEngine = container.get<IEngine>(TYPES.engine);
//   containerEngine.start();
// };

// runWithContainer();