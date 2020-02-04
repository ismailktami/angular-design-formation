import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/Auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , OnDestroy {
  constructor(private authService: AuthService) { }
  isAuth: boolean;
  authSubscription: Subscription;
  ngOnInit() {
      this.authSubscription =  this.authService.authChange.subscribe(auth => {
      this.isAuth = auth;
    });
  }

  logout() {
    this.authService.logout();
  }
  ngOnDestroy(): void {

      this.authSubscription.unsubscribe();
  }

}
