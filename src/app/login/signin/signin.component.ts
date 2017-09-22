import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signIn(this.user.email, this.user.password).then((result) => {
      alert('all good');
      window.location.href = '/clients';
    });
  }
}
