import { SearchBook } from './../commands/search-manager/search-for-book';
import { TakeUserInput } from './../engine/DomEventHandlers/take-user-input';
import { ITakeUserInput } from '../contracts/engine/event_handlers';

// tslint:disable
import { Container, interfaces } from 'inversify';

import {
    ICommand,
    ICommandFactory,
    ICommandProcessor,
    IDataFormatter,
    IEngine,
    IModelsFactory,
    IReader,
    IWriter,
    IGlobalDatabase
} from '../contracts';
import {
    CommandFactory,
    CommandProcessor,
    DataFormatter,
    Engine,
    ModelsFactory,
    HtmlReader,
    HtmlWriter
} from '../engine';
import { TYPES } from './types';
import { GlobalDatabase, GlobalDatabaseLocal } from '../data';

const container: Container = new Container();

container.bind<IGlobalDatabase>(TYPES.globalDatabase).to(GlobalDatabase).inSingletonScope();
//container.bind<IGlobalDatabase>(TYPES.globalDatabase).to(GlobalDatabaseLocal).inSingletonScope();

container.bind<IModelsFactory>(TYPES.modelsFactory).to(ModelsFactory);
container.bind<ICommandProcessor>(TYPES.commandProcessor).to(CommandProcessor);
container.bind<IDataFormatter>(TYPES.dataFormatter).to(DataFormatter);
container.bind<ITakeUserInput>(TYPES.userInput).to(TakeUserInput);
container.bind<ICommand>(TYPES.search).to(SearchBook);
container.bind<IEngine>(TYPES.engine).to(Engine);

// container.bind<IReader>(TYPES.reader).to(FileReader); // Change here if you need html reader
// container.bind<IWriter>(TYPES.writer).to(ConsoleWriter); // Change here if you need html writer

container.bind<IReader>(TYPES.reader).to(HtmlReader); // Change here if you need html reader
container.bind<IWriter>(TYPES.writer).to(HtmlWriter); // Change here if you need html writer



// the binding so the container command factory can work - dont touch :)
container
  .bind<interfaces.Factory<ICommand>>(TYPES.containerCommandFactory)
  .toFactory<ICommand>((context: interfaces.Context) => (commandName: string): ICommand => context.container.get<ICommand>(TYPES[commandName]));

container.bind<ICommandFactory>(TYPES.commandFactory).to(CommandFactory); // Change here if you want to use the container command factory
// container.bind<ICommandFactory>(TYPES.commandFactory).to(ContainerCommandFactory);

export { container };
