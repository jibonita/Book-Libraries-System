// tslint:disable
import { Container, interfaces } from 'inversify';
import {
    AddFurnitureToCompany,
    CreateChair,
    CreateCompany,
    CreateTable,
    FindFurnitureFromCompany,
    RemoveFurnitureFromCompany,
    ShowCompanyCatalog
} from '../commands';
import {
    ICommand,
    ICommandFactory,
    ICommandProcessor,
    IDataFormatter,
    IEngine,
    IFuritureDatabase,
    IModelsFactory,
    IReader,
    IWriter,
    ITakeUserInput
} from '../contracts';
import {
    CommandFactory,
    CommandProcessor,
    ConsoleWriter,
    ContainerCommandFactory,
    DataFormatter,
    Engine,
    FileReader,
    ModelsFactory,
    HtmlReader,
    HtmlWriter,
    TakeUserInput
} from '../engine';
import { TYPES } from './types';

const container: Container = new Container();

container.bind<IModelsFactory>(TYPES.modelsFactory).to(ModelsFactory);
container.bind<ICommandProcessor>(TYPES.commandProcessor).to(CommandProcessor);
container.bind<IDataFormatter>(TYPES.dataFormatter).to(DataFormatter);
container.bind<ITakeUserInput>(TYPES.userInput).to(TakeUserInput); // new binding, takes user input for login
container.bind<IEngine>(TYPES.engine).to(Engine);
container.bind<IReader>(TYPES.reader).to(HtmlReader); // Change here if you need html reader
container.bind<IWriter>(TYPES.writer).to(HtmlWriter); // Change here if you need html writer

container.bind<ICommand>(TYPES.createchair).to(CreateChair);
container.bind<ICommand>(TYPES.createcompany).to(CreateCompany);
container.bind<ICommand>(TYPES.createtable).to(CreateTable);
container.bind<ICommand>(TYPES.addfurnituretocompany).to(AddFurnitureToCompany);
container.bind<ICommand>(TYPES.findfurniturefromcompany).to(FindFurnitureFromCompany);
container.bind<ICommand>(TYPES.removefurniturefromcompany).to(RemoveFurnitureFromCompany);
container.bind<ICommand>(TYPES.showcompanycatalog).to(ShowCompanyCatalog);

// the binding so the container command factory can work - dont touch :)
container
  .bind<interfaces.Factory<ICommand>>(TYPES.containerCommandFactory)
  .toFactory<ICommand>((context: interfaces.Context) => (commandName: string): ICommand => context.container.get<ICommand>(TYPES[commandName]));

container.bind<ICommandFactory>(TYPES.commandFactory).to(CommandFactory); // Change here if you want to use the container command factory
// container.bind<ICommandFactory>(TYPES.commandFactory).to(ContainerCommandFactory);

export { container };
