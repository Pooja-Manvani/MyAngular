import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { UserForm } from '../../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormPresenterService {

  private getdata:Subject<UserForm>;
  public getdata$:Observable<UserForm>;

  constructor() {
    this.getdata = new Subject<UserForm> ();
    this.getdata$ = this.getdata.asObservable ();
   }


   public getFormdata(data: UserForm){
    this.getdata.next(data);
   }

}
