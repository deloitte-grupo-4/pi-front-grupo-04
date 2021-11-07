import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = 'https://e-stampas.herokuapp.com';

  constructor(private http:HttpClient) { }

  register(user:User){
    return this.http.post(`${this.url}/auth/criarUser`, user).pipe(take(1));
  }
}
