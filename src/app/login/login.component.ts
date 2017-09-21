import { AuthService } from '../services/auth.service';
import { MzModalComponent } from 'ng2-materialize/dist';
import { Component, OnInit } from '@angular/core';
import { MzBaseModal } from 'ng2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends MzBaseModal {
  user: any = {};

  constructor(private authService: AuthService) {
    super();
  }

  login() {
    // console.log(this.user);
    this.authService.Login(this.user.email,  this.user.password).then(user => console.log(user) );
  }

}
