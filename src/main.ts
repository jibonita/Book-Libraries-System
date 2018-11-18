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

const runInContainer: () => void = (): void => {
  const containerEngine: IEngine = container.get<IEngine>(TYPES.engine);

  const buttonIDs: string[] = ['register', 'login', 'create-library', 'add-book', 'search-book'];
  buttonIDs.map((id: string)=>{
    const button: HTMLButtonElement = <HTMLButtonElement>(document.getElementById(id));
    if(button){
       button.addEventListener('click', (e: MouseEvent) => {
        localStorage.setItem(Labels.lsActionClicked, (<HTMLButtonElement>(e.target)).id);
        containerEngine.start();
      });
    }
  });
  const resultField: HTMLTextAreaElement = <HTMLTextAreaElement>(document.getElementById('result'));
  resultField.addEventListener('DOMSubtreeModified', () => {
    console.log("event caught!")
    if (resultField.innerHTML.includes("successfully logged in")) {
      const toHide: HTMLCollection = <HTMLCollection>(document.getElementsByTagName("li"));
      Array.from(toHide).forEach((li) => {
        console.log(li)
        if (li.className === 'tab to-hide') {
          li.className = 'hiden2';
        } 
        if (li.className === 'tab to-show') {
          li.className = 'tab show';
        }
      });

      console.log("if caught ")
    }
  })//

  };

runInContainer();

//runInLocalEnvironment();


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
