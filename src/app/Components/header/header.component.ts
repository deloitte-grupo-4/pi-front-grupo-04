import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public cart: ShoppingCartService, public router: Router) { }

  ngOnInit(): void {
  }

  user = ''

  loggedIn(){
    if(this.user) {
      this.router.navigate(['/profile'])
    } else {
      this.router.navigate(['/login'])
    }
  }
}
