import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './mvpfilter.model';

@Injectable({
  providedIn: 'root'
})

export class MvpfilterService {

  api: string = 'http://localhost:3000/User'
  constructor(private http: HttpClient) { }

  public getdata():Observable<User[]>{
    return this.http.get<User[]>(`${this.api}`)
  }
}
