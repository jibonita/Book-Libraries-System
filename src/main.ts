// tslint:disable-next-line
import "reflect-metadata";
import { container } from "./common/ioc.config";
import { TYPES } from "./common/types";
import { ICommandFactory, ICommandProcessor, IDataFormatter, IReader, IWriter, IEngine, IModelsFactory, IGlobalDatabase } from "./contracts";
import { CommandFactory, CommandProcessor, DataFormatter, ConsoleWriter, Engine, ModelsFactory } from "./engine";
import { GlobalDatabase } from "./data";
import { TakeUserInput } from "./engine/DomEventHandlers";
import { Labels } from "./common/label-constants";


console.log("type");


const runInBrowserEnvironment: () => void = (): void => {
  const runButton: HTMLButtonElement = <HTMLButtonElement>(document.getElementById('run'));
  //const engine: IEngine = new Engine(commandProcessor, htmlReader, htmlWriter);
  const engine: IEngine = container.get<IEngine>(TYPES.engine);
  runButton.addEventListener('click', () => engine.start());
};

const runInContainer: () => void = (): void => {
  const containerEngine: IEngine = container.get<IEngine>(TYPES.engine);
  localStorage.clear();
  // temporary will be like this
  const buttonIDs: string[] = ['register', 'login', 'create-library', 'add-book'];
  buttonIDs.map((id)=>{
    const button: HTMLButtonElement = <HTMLButtonElement>(document.getElementById(id));
    if (button) {
       button.addEventListener('click', (e) => {
        localStorage.setItem(Labels.lsActionClicked, (<HTMLButtonElement>(e.target)).id);
        containerEngine.start();
      });
    }
    
  });
  
  
};

runInContainer();

//runInBrowserEnvironment();