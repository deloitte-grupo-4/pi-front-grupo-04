import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../Models/cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:HttpClient) { }

  findCEP(cep:string){
    return fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
      return response.json()
    }).then(response => this.convertCEP(response))
  }

  private convertCEP(cepResponse:any):Cep{
    let cep = new Cep();
    cep.cep = cepResponse.cep;
    cep.logradouro = cepResponse.logradouro;
    cep.cidade = cepResponse.localidade;
    cep.estado = cepResponse.uf;
    return cep
  }
}
