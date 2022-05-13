import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patientData } from './mypatient.model';


@Injectable({
  providedIn: 'root'
})
export class MypatientService {

  api: string = 'http://localhost:3000/patientData'
  constructor(private http: HttpClient) { }

  public getdata():Observable<patientData[]>{
    return this.http.get<patientData[]>(`${this.api}`);
  }
}
