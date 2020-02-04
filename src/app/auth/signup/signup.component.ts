import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../Auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate ;
  constructor(private autheService: AuthService) {}

  ngOnInit() {
    this.maxDate = new Date();
    console.log(this.maxDate.getFullYear());
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  signup(form: NgForm) {
    if ( form.valid ) {
        this.autheService.registerUser(
          {
            email: form.value.email,
            password: form.value.password
          }
        );
    }
  }
}
