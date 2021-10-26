import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  email?:string;
  pass?:string;
  user:User = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  public login(){
      this.user.email = this.email;
      this.user.pass = this.pass;
      this.userService.login(this.user);
  }

}
