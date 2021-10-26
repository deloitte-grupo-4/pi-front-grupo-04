import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  public login(user:User):void{
    this.http.post<User>('http://localhost:8080/user/login', user)
    .subscribe(result => window.sessionStorage.setItem('token', "Autorizado"));
  }



}
