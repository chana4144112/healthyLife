import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../app/components/user/user';
import { SingleUser } from '../app/interfaces/Single-User';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

//  getContactPersons(): Observable<User> {
//     return this.http.get<User>('');
//   }

  getUsersFromServer(): Observable<SingleUser[]> {
    return this.http.get<SingleUser[]>('https://localhost:7257/GetUsers');
  }
}
