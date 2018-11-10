import { UserType } from "../../enums/user-type";
export interface IUser{
  name:string,
  password: string,
  userType: UserType;
} 