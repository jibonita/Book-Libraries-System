// tslint:disable-next-line
import "reflect-metadata";
import { container } from "./common/ioc.config";
import { TYPES } from "./common/types";
import { ICommandFactory, ICommandProcessor, IDataFormatter, IReader, IWriter, IEngine, IModelsFactory, IGlobalDatabase, IBook } from "./contracts";
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
        console.log("li:", li);
        if (li.className === 'tab to-hide') {
          li.className = 'hiden2';
        } 
        if (li.className === 'tab to-show') {
          li.className = 'tab show';
        }
      });
    }
    if (resultField.innerHTML.includes("Search results are displayed below")) {
      const booksFound: IBook[] = JSON.parse(<any>localStorage.getItem('search-result'));
      const searchResultContainer: HTMLSpanElement = <HTMLSpanElement>(document.getElementById("search-result-container"));
      searchResultContainer.innerHTML = `Last search results: <br/>`
      Array.from(booksFound).forEach((book) => {
        searchResultContainer.innerHTML += `<b><br/> Book &emsp; Title: ${book.title} &emsp; &emsp; Written by: ${book.author}</b>`;
      });
    }
  })

  };

runInContainer();

