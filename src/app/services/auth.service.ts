import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private authFirebase: AngularFireAuth) { 
    this.isLogged();
  }

  Login(email: string, password: string) {

    return this.authFirebase.auth.signInWithEmailAndPassword(email, password);
  }

  isLogged() {

    return this.authFirebase.authState;
  }

  signIn(email: string, password: string) {
    return this.authFirebase.auth.createUserWithEmailAndPassword(email, password);
  }
}
