import { ILibrary } from './library';
import { UserType } from "../../enums/user-type";
import { BookTracker } from '../../models';
export interface IOwner{
  name:string,
  password: string,
  userType: UserType,

  address: string,
  library: BookTracker[];
} 