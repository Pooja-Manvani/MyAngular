import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForm } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api: string = 'http://localhost:3000/UserForm'
  constructor(private http: HttpClient) { }

  public getdata():Observable<UserForm[]>{
    return this.http.get<UserForm[]>(`${this.api}`);
  }

  public postdata(Data: UserForm):Observable<UserForm>{
    return this.http.post<UserForm>(`${this.api}`, Data);
  }

  public getbyid(id:number):Observable<UserForm>{
    return this.http.get<UserForm>(`${this.api}/${id}`);
  }

  public updateData(id:number,data:UserForm):Observable<UserForm>{
    return this.http.put<UserForm>(`${this.api}/${id}`,data);
  }
  
  public deleteData(id:number):Observable<UserForm>{
    return this.http.delete<UserForm>(`${this.api}/${id}`);
  }
}
