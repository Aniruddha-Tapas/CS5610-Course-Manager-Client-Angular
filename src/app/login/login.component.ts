import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";
import { UserServiceClient } from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    if (username === undefined || password === undefined) {
      alert('Please enter correct username or password!');
    } else if (username === 'admin' || password === 'admin') {
      this.router.navigate(['admin']);
    } else {
      this.service
        .login(username, password)
        .then((response) => {
          console.log(response);
          if (response.status === 500) {
            alert('Incorrect credentials. Please try again!');
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }
}
