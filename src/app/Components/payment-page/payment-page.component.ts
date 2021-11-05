import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cep } from 'src/app/Models/cep.model';
import { CepService } from 'src/app/Services/cep.service';
import { OrderService } from 'src/app/Services/order.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  cep = new Cep();
  selectedValue = 'boleto'
  constructor(private cepService:CepService,
    private shoppingCartService: ShoppingCartService,
    private userService: UserService,
    private orderService: OrderService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  findCEP(){
    if(this.cep.cep){
      this.cepService.findCEP(this.cep.cep)
      .then((cep:Cep) => this.cep = cep)
      .catch(()=> {
        let cep = this.cep.cep;
        this.cep = new Cep();
        this.cep.cep = cep;
        alert("Não foi possível encontrar o CEP")
      })
    }
  }

  submitOrder(event:any){
    event.preventDefault();
    let order = {
      shoppingCart : this.shoppingCartService.getCart(),
      deliveryAddress : this.cep,
      username : this.userService.getUser(),
      paymentMethod : this.selectedValue
    }
    console.log(order)
    this.orderService.submitOrder(order).subscribe((res:any) => {
      if(res.status == 200){
        this.router.navigate(['/confirmation'])
      }
    });
  }

}
