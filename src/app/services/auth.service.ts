import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private authFirebase: AngularFireAuth) { 
    this.isLogged();
  }

  Login(username: string, password: string) {

    return this.authFirebase.auth.signInWithEmailAndPassword(username, password);
  }

  isLogged() {

    return this.authFirebase.authState;
  }
}
