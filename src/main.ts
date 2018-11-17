// tslint:disable-next-line
import "reflect-metadata";
import { container } from "./common/ioc.config";
import { TYPES } from "./common/types";
import { ICommandFactory, ICommandProcessor, IDataFormatter, IReader, IWriter, IEngine, IModelsFactory, IGlobalDatabase } from "./contracts";
import { CommandFactory, CommandProcessor, DataFormatter, ConsoleWriter, Engine, ModelsFactory } from "./engine";
import { GlobalDatabase } from "./data";
import { TakeUserInput } from "./engine/DomEventHandlers";


console.log("type");


const runInBrowserEnvironment: () => void = (): void => {
  const runButton: HTMLButtonElement = <HTMLButtonElement>(document.getElementById('run'));
  //const engine: IEngine = new Engine(commandProcessor, htmlReader, htmlWriter);
  const engine: IEngine = container.get<IEngine>(TYPES.engine);
  runButton.addEventListener('click', () => engine.start());
};

const runInContainer: () => void = (): void => {
  const containerEngine: IEngine = container.get<IEngine>(TYPES.engine);
  
  const regButton: HTMLButtonElement = <HTMLButtonElement>(document.getElementById('register'));
  regButton.addEventListener('click', (e) => {
    TakeUserInput.actionName = (<HTMLButtonElement>(e.target)).id;
    containerEngine.start();
  });
  const loginButton: HTMLButtonElement = <HTMLButtonElement>(document.getElementById('login'));
  if (loginButton) {
    loginButton.addEventListener('click', (e) => {
      TakeUserInput.actionName = (<HTMLButtonElement>(e.target)).id;
      containerEngine.start();
    });
  }
  
  const addLibButton: HTMLButtonElement = <HTMLButtonElement>(document.getElementById('create-library'));
  addLibButton.addEventListener('click', (e) => {
    TakeUserInput.actionName = (<HTMLButtonElement>(e.target)).id;
    containerEngine.start();
  });
};

runInContainer();

//runInBrowserEnvironment();