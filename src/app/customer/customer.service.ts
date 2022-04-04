import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerForm } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  api: string = 'http://localhost:3000/customerForm';

  constructor(private http: HttpClient) {}

  public get():Observable<customerForm[]>{
    return this.http.get<customerForm[]>(`${this.api}`);
  }

  public post(data: customerForm):Observable<customerForm>{
    return this.http.post<customerForm>(`${this.api}`,data);
  }

}
