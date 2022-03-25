import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './mvpfilter.model';

@Injectable({
  providedIn: 'root'
})

export class MvpfilterService {

  public getusers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:300/User')
  }

  public getuserById(id: string): Observable<User> {
    return this.http.get<User>(`http://localhost:300/User/${id}`);
  }

  public deleteuser(id: number): any {
    return this.http.delete<any>(`http://localhost:300/User/${id}`)
  }

  public adduser(form: any): any {
    return this.http.post<any>(`http://localhost:300/User`, form)
  }

  public edituser(form: any, id: string): any {
    return this.http.put<any>(`http://localhost:300/User/${id}`, form)
  }
  api: string = 'http://localhost:3000/User'
  constructor(private http: HttpClient) { }

  public getdata():Observable<User[]>{
    return this.http.get<User[]>(`${this.api}`)
  }
}
