import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

   constructor(private userService: UserService) { }

  user = this.userService.getName();

  ngOnInit(): void {
  }

  expandMenu = false;

  expand(){
    this.expandMenu = !this.expandMenu;
  }

  
  

}
