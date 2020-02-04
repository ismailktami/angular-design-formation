import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
   if ( form.valid) {
     this.authService.login({
       email: form.value.email,
       password: form.value.password
     });
   }
  }
}
