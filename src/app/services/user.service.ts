import { User } from '../shared/user';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  clients: any = [];
  headers: Headers;

  constructor(private http: Http) {

    this.headers = new Headers;
  }

  getUsers(): Promise<any> {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    return this.http.get('http://127.0.0.1:8000/users?format=json', {headers: this.headers})
      .map(res => res.json()).toPromise();
  }

  getUser(id: number) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    return this.http.get(`http://127.0.0.1:8000/users/${id}/?format=json`, {headers: this.headers})
      .map(res => res.json()).toPromise();
  }

  getUserByUid(uid: string) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    return this.http.get(`http://127.0.0.1:8000/users/userbyuid/${uid}/?format=json`, {headers: this.headers})
      .map(res => res.json()).toPromise();
  }

  addUser(user: User) {

    // const token =  'ec7d4bfaa53bc4647195884610fdf310d1cbb6f1';
    // this.headers.append('cache-control', 'no-cache');
    // this.headers.append('Authorization', `Token ${token}`)
    this.headers.append('accept', 'application/json');
    this.headers.append('content-type', 'application/json');

    this.http.post('http://127.0.0.1:8000/users', JSON.stringify(user), {headers: this.headers})
      .subscribe((result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      });

  }
}


