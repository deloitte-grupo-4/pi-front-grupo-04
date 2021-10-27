import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/Models/cep.model';
import { CepService } from 'src/app/Services/cep.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  cep = new Cep();

  constructor(private cepService:CepService) { }

  ngOnInit(): void {
  }

  findCEP(){
    if(this.cep.cep){
      this.cepService.findCEP(this.cep.cep)
      .then((cep:Cep) => this.cep = cep);
    }
  }
}
