import { UserService } from './services/user.service';
import { User } from './shared/user';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { MzModalService } from 'ng2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MzModalService]
})
export class AppComponent {
  title = 'app';
  loggedIn = false;
  user: User = new User;


  constructor(private modalService: MzModalService, private authService: AuthService, private userService: UserService) {
    this.authService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggedIn = true;
          this.user.avatar = result.photoURL;
          this.userService.getUserByUid(result.uid).then(user => this.user = user);
        } else {
          this.loggedIn = false;
        }
      }, (error) => {
        this.loggedIn = false;
      });
  }
}
