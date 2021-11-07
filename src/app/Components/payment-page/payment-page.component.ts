import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cep } from 'src/app/Models/cep.model';
import { User } from 'src/app/Models/user.model';
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
  loading = false;
  text = 'Finalizar compra';
  id: User | undefined;


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

  getUser() {
    this.userService.getById().subscribe((resp: User) => {
      this.id = resp;
    });
  }


  submitOrder(event:any){
    this.loading = true;
    this.text = ''
    event.preventDefault();
    let order = {
      shoppingCart : this.shoppingCartService.getCart(),
      deliveryAddress : this.cep,
      // cep: this.cep.cep,
      // city: this.cep.cidade,
      // logradouro: this.cep.logradouro,
      // number: this.cep.numero,
      // state: this.cep.estado,
      user: this.userService.getUserID(),
      total: 8,
      paymentMethod: this.selectedValue,
    }
    console.log(order);
    this.orderService.submitOrder(order).subscribe((res:any) => {
      if(res.status == 200){
        this.router.navigate(['/confirmation'])
      }
    });
  }

}
