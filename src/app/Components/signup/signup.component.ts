import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationGuard } from 'src/app/auth/authentication.guard';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name?:string;
  surname?:string;
  email?:string;
  username?:string;
  pass?:string;
  conf?:string;

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(user:User){
    this.auth.register(user).subscribe({
      next: data =>{
        console.log(data);
      },
      error: err => console.log(err),
      complete: () => console.log("Observável finalizado")
    });

  }

}