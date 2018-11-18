// tslint:disable:no-any
export const TYPES: any = {
    globalDatabase: Symbol.for('globalDatabase'),
    //globalDatabaseLocal: Symbol.for('globalDatabase'),
    modelsFactory: Symbol.for('modelsFactory'),
    commandFactory: Symbol.for('commandFactory'),
    commandProcessor: Symbol.for('commandProcessor'),
    dataFormatter: Symbol.for('dataFormatter'),
    reader: Symbol.for('reader'),
    writer: Symbol.for('writer'),
    engine: Symbol.for('engine'),
    userInput: Symbol.for('userInput'),

    containerCommandFactory: Symbol.for('containerCommandFactory')
};
