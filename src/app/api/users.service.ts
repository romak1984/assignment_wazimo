import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl = 'https://storage.googleapis.com/static.aoni.io/demo/user.json';

  constructor(private http: HttpClient) { }

  getUsers() {
    return  this.http.get<User[]>(this.usersUrl);
  }


}
