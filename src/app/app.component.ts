import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { InputFormComponent } from "./components/input-form/input-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UsersListComponent, UserComponent, NgFor, NgIf, InputFormComponent]
})
export class AppComponent {
  title = 'Application-page';
}
