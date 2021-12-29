import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'yuj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = new Login("", "");
  submitted = false;
  onSubmit() { 
    this.submitted = true;   
  }
  loginVal(email:any,password: any){
    if (this.submitted == true){
      sessionStorage.setItem("Email",email);
      sessionStorage.setItem("Password",password);
      this.router.navigate(["what-it-is"]);
    }
   
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
