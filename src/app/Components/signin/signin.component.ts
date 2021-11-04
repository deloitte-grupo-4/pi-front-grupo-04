import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Output() onCancelClick:EventEmitter<null> = new EventEmitter();

  username?:string;
  password?:string;
  // user:any;
  // user?:User = new User();
  url:string = '';

  constructor(private userService: UserService, public router:Router) { }

  ngOnInit(): void {
  }

  public login(user:User){
      //  this.user.username = this.username;
      //  this.user.password = this.password;
      this.userService.login(user);

      if(this.router.url !== '/shopping-cart'){
        console.log(this.router.url)
        this.router.navigate(['/profile']);
      } else {
        this.router.navigate(['/payment']);
      }
   }

   cancel(){
    this.onCancelClick.emit()
  }

  checkRoute(url:any){

    if(url == '/login'){
      return ''
    } else {
       return 'modal'
    }
  }

}
