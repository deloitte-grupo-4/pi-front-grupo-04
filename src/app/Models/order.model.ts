import { CartProduct } from "./cartProduct.model";
import { Cep } from "./cep.model";

export class Order {
  shoppingCart?:CartProduct[];
  deliveryAddress?:Cep;
  username?:string;
}
