import { Role } from './role';
import {BaseModel} from "./base";

export interface IUser extends BaseModel <IUser>{
  title?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  displayName: string;
  token: string;
  role?: Role;
}
export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}









