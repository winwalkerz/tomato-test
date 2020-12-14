import { LoginService } from './../../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin = {
    username: 'dream',
    password: 'A12345678',
  };
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    let loginData = {
      username: this.userLogin.username,
      password: this.userLogin.password,
    };
    this.loginService.login(loginData).then((res: any) => {
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['system']);
    });
  }
}
