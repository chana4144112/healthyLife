import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../user/user';
import { SingleUser } from '../../interfaces/Single-User';
import { HttpService } from '../../../Services/http-service';



@Component({
  imports: [User],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html'
})

export class UserList implements OnInit{

    private http = inject(HttpService);
  usersList = signal<SingleUser[]>([]);

  ngOnInit(): void {
    this.http.getUsersFromServer().subscribe({
      next: users => {
        console.log(users);
        this.usersList.set(users);
      },
      error: error => console.error(error),
    });
  }


}
