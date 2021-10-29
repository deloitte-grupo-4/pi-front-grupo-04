import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username?:string;
  password?:string;
   //user:User = new User();

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {

  }

  public login(){
       this.username = this.username;
       this.password = this.password;

       this.router.navigate(['']);
   }



}
