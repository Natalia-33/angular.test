import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {  HttpClient } from "@angular/common/http";
import { UserComponent } from "./components/user/user.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from "@angular/common";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { InputFormComponent } from "./components/input-form/input-form.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
    declarations: [ 
    
    ],
    imports: [
        BrowserModule,
        UserComponent, 
        UsersListComponent,
        HttpClientModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        InputFormComponent,
        MatGridListModule,
        MatFormFieldModule,
        
    ],
    providers: [],
    bootstrap: [HttpClient]
})

export class AppModule {}
