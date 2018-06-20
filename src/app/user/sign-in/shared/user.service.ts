import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {
selectedUser: User;

constructor(private http: Http) { }

userLogin(LoginID, Pass) {

}

}
