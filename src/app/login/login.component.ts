import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  signup: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password:''
  };
  
 
  constructor(
    private router : Router,
  ) { }
  ngOnInit(): void {
    const localData = localStorage.getItem('signup');
    if(localData != null) {
      this.signup = JSON.parse(localData);
    }
  }
  onSignUp() {
    this.signup.push(this.signupObj);
    localStorage.setItem('signup',JSON.stringify(this.signup));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
  onLogin() {
    debugger
    const isUserExit = this.signup.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExit != undefined)  {
      alert('User Login Successfully');
      this.router.navigate(['./Home'])
    } else {
      alert('Worng credentials');
    }
  }
   
}

