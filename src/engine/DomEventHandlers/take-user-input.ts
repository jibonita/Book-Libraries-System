import { ITakeUserInput } from './../../contracts/engine/event_handlers/take-user-input';
import { inject, injectable } from 'inversify';
import { TextModifier } from '../../common/text-modifier';
import { Constants } from '../../common/constants';
import * as commands from '../DomEventHandlers';
import { Labels } from '../../common/label-constants';

@injectable()
export class TakeUserInput implements ITakeUserInput {

  public takeInput(): string{
    
    const actionName: string = <string>localStorage.getItem(Labels.lsActionClicked)
    const action: string = TextModifier.dashToCapitalize(actionName);
    const actionCommand: string = `Take${action}UserInput`;

    return this.callTakeInputAction(actionCommand);
  }
  private callTakeInputAction(actionCommand: string): string{
    const command: any = Object
      .keys(commands)
      .reduce((allCommands: Map<string, new () => ITakeUserInput>, commandName: string): Map<string, new () => ITakeUserInput> => {
          allCommands.set(commandName, (<any>commands)[actionCommand]);

        return allCommands;
      },
      new Map()
    );
   
    const userInputAction: (new () => ITakeUserInput) | undefined  = command.get(actionCommand);    
    if (!userInputAction) {
      throw new Error(Constants.getInvalidCommandErrorMessage(actionCommand));
    }

    const takeInputCommand: ITakeUserInput = new userInputAction();
    return takeInputCommand.takeInput();
  
    }
  

}

