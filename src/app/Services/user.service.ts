import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginResponse } from '../Models/loginResponse.model';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router: Router) { }

  public login(user:User){
    return this.http.post<LoginResponse>('http://localhost:8080/auth/logar', user).pipe(
      map((response) => {
        window.sessionStorage.setItem('id', JSON.stringify(response.userId))
        window.sessionStorage.setItem('name', JSON.stringify(response.name))
        window.sessionStorage.setItem('token', JSON.stringify(response.token))
        return response
      })
    )
  }

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('name');

    this.router.navigate(['/'])
  }

  public getUser() {
    let savedUser = sessionStorage.getItem('id');
    if(savedUser){
      savedUser = JSON.parse(savedUser)
    }
    return savedUser;
  }

  public getName() {
    let savedName = sessionStorage.getItem('name');
    if(savedName){
      savedName = JSON.parse(savedName)
    }

    return savedName;
  }

}
