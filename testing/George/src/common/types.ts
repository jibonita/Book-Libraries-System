// tslint:disable:no-any
export const TYPES: any = {
    furnitureDatabase: Symbol.for('furnitureDatabase'),
    modelsFactory: Symbol.for('modelsFactory'),
    commandFactory: Symbol.for('commandFactory'),
    commandProcessor: Symbol.for('commandProcessor'),
    dataFormatter: Symbol.for('dataFormatter'),
    reader: Symbol.for('reader'),
    writer: Symbol.for('writer'),
    engine: Symbol.for('engine'),

    createchair: Symbol.for('createchair'),
    createcompany: Symbol.for('createcompany'),
    createtable: Symbol.for('createtable'),
    addfurnituretocompany: Symbol.for('addfurnituretocompany'),
    findfurniturefromcompany: Symbol.for('findfurniturefromcompany'),
    removefurniturefromcompany: Symbol.for('removefurniturefromcompany'),
    showcompanycatalog: Symbol.for('showcompanycatalog'),

    containerCommandFactory: Symbol.for('containerCommandFactory')
};
