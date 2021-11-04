import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';

interface Response{
  msg:string,
  token:string
}

@Injectable()
export class AuthenticationGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
    
    ){}

  canActivate (

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
    const token = window.sessionStorage.getItem('token');

    if (token) {
      //this.router.navigate(['']);
      return true;
      console.log("foi")
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}