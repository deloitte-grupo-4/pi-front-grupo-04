import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public cart: ShoppingCartService, public router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  loggedIn(){
      if(this.userService.getUserID()) {
      this.router.navigate(['/profile'])
    } else {
      this.router.navigate(['/login'])
    }
  }
}
