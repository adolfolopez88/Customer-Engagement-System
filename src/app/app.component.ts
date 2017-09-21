import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
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

  constructor(private modalService: MzModalService, private authService: AuthService) {
    this.authService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }, (error) => {
        this.loggedIn = false;
      });
  }

  openLogin() {
    this.modalService.open(LoginComponent, {});
  }
}
