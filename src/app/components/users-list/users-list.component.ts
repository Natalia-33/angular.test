
import { Component, OnInit } from '@angular/core';
  import { UserComponent } from '../user/user.component';
import { Observable, map } from 'rxjs';
import { ReturnedData } from '../../interfaces/returned-data';
import { AsyncPipe, NgForOf } from '@angular/common';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserComponent, AsyncPipe, NgForOf,NgIf],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})

export class UsersListComponent  implements OnInit{
  [x: string]: any;

 
users$!: Observable<User[]>;
users: User[] = [];
 
  constructor(private userService: UsersService) {}


  ngOnInit(): void {
  this.users$ =  this.userService.initUsers();
    }
    

  
}
