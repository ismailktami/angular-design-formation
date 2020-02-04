import {AuthData} from './auth-data.model';
import {User} from './user.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User = null;
  constructor(private router: Router) {

  }

  authChange = new Subject<boolean>();
  registerUser(authData: AuthData) {
    this.user = {
        email: authData.email,
        userId: Math.random()
    };
    this.authChange.next(true);
  }
  isAuth() {
    if (this.user == null) {
      return false;
    }
    return true;

  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.random()
    };

    this.authChange.next(true);
    this.router.navigate(['training']);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['login']);

  }

  getUser(): User {
    return {...this.user};
  }
}
