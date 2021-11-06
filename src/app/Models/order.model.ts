import { CartProduct } from "./cartProduct.model";
import { Cep } from "./cep.model";
import { User } from "./user.model";

export class Order {
  shoppingCart?:CartProduct[];
  // deliveryAddress?:Cep;
  cep?: string;
  city?: string;
  logradouro?: string;
  number?: string;
  state?: string;
  userId?:User;
  total?:number
  // paymentMethod?:string;
}
