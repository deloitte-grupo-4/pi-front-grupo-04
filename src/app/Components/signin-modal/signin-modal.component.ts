import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css']
})
export class SigninModalComponent implements OnInit {


  email?:string;
  pass?:string;
  user?:any
  // user:User = new User();

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {

  }

  public login(){
       this.user.email = this.email;
       this.user.pass = this.pass;
       this.userService.login(this.user);

       this.router.navigate(['']);
  }

  showModal = true;

  hidingModal(){
    this.showModal = false;
  }

}
