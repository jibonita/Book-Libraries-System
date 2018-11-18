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

const initialSetUp = () => {

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", "[]")
  } 

  if (!localStorage.getItem("libraries")) {
    localStorage.setItem("libraries", "[]")
  } 

  if (!localStorage.getItem("books")) {
    localStorage.setItem("books", "[]")
  } 

}

const runInBrowserEnvironment: () => void = (): void => {
  const runButton: HTMLButtonElement = <HTMLButtonElement>(document.getElementById('run'));
  //const engine: IEngine = new Engine(commandProcessor, htmlReader, htmlWriter);
  const engine: IEngine = container.get<IEngine>(TYPES.engine);
  runButton.addEventListener('click', () => engine.start());
};

// kato class
// class ButtonActionOnClick  {
//   private buttonIDs: string[] = ['register', 'login', 'create-library', 'add-book'];

//   constructor( buttonId: string ){

//     if(!(buttonId in this.buttonIDs)){
//       const buttonNotImplementedMessage: string = "Take a look at main.ts";
//       return ;
//     }
//     const buttonClicked: HTMLButtonElement = <HTMLButtonElement>document.getElementById(buttonId);

//      buttonClicked.addEventListener( "click", this.buttonClicked );
//  }
//   buttonClicked: (e: any) => void = (e) => {
//     localStorage.setItem(Labels.lsActionClicked, (<HTMLButtonElement>(e.target)).id);
//     containerEngine.start();
//   }
// }


const runInContainer: () => void = (): void => {
  const containerEngine: IEngine = container.get<IEngine>(TYPES.engine);
  initialSetUp();
  // temporary will be like this
  const buttonIDs: string[] = ['register', 'login', 'create-library', 'add-book'];
  buttonIDs.map((id)=>{
    const button: HTMLButtonElement = <HTMLButtonElement>(document.getElementById(id));
       button.addEventListener('click', (e) => {
        localStorage.setItem(Labels.lsActionClicked, (<HTMLButtonElement>(e.target)).id);
        containerEngine.start();
      });
    
  });
  
  
};

runInContainer();

//runInBrowserEnvironment();