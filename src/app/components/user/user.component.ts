import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UsersListComponent,  MatCardModule, MatButtonModule, MatIcon, MatGridListModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() set user(value: any) {this._user = {...value}};
  get user() { return this._user};

 

@Output('newName') newName: EventEmitter<any> = new EventEmitter<any>();
 
private _user: any;

constructor() {

}
}
