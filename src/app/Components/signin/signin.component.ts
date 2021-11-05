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

  constructor(private userService: UserService, public router:Router) { }

  ngOnInit(): void {
  }

  public login(){
      this.userService.login({username: this.username, password: this.password}).subscribe((result:any) => {
        if(result) {
          if(this.router.url !== '/shopping-cart'){
            this.router.navigate(['/profile']);
          } else {
            this.router.navigate(['/payment']);
          }
        } else {
          this.router.navigate(['/login'])
        }
      });
   }

   cancel(){
    this.onCancelClick.emit()
  }

  applyClass(url:any){
    if(url == '/login'){
      return ''
    } else {
       return 'modal'
    }
  }

}
