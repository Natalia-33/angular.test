import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ReturnedData } from '../interfaces/returned-data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  initUsers = () => this.http.get<ReturnedData>('https://reqres.in/api/users').pipe (map((obj: ReturnedData) => obj.data));
}


