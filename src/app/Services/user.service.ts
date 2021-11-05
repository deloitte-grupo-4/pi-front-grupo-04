import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public login(user:User):void{
    this.http.post<User>('http://localhost:8080/auth/logar', user)
    .subscribe(result => {
      
      window.sessionStorage.setItem('token', JSON.stringify(result.userId)),

      window.sessionStorage.setItem('name', JSON.stringify(result.name))
    }
    )}
  public getUser() {
    let savedUser = sessionStorage.getItem('token');
    return savedUser;
  }

  public getName() {
    let savedName = sessionStorage.getItem('name');
    if (savedName) {
      savedName = savedName.split('"').join('')
    }

    return savedName;
    
  }

}
