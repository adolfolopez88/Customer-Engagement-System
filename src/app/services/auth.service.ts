import { User } from '../shared/user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: any = {};

  constructor(private authFirebase: AngularFireAuth, private userService: UserService) {
    this.isLogged();
  }

  Login(email: string, password: string) {

    return this.authFirebase.auth.signInWithEmailAndPassword(email, password);
  }

  isLogged() {

    return this.authFirebase.authState;
  }

  signIn(email: string, password: string) {

    this.user = new User();
    this.user.username = email;
    this.user.email = email;
    this.user.password = password

    this.authFirebase.auth.createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.user.firebase_uid = result.uid;
        this.userService.addUser(this.user);
      });
  }

  loginByFacebook() {

    this.authFirebase.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
    .then(() => { })
    .catch();

  }

}
