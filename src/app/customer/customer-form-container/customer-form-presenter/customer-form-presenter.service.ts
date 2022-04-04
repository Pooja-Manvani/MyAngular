import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { customerForm } from '../../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerFormPresenterService {

  public customerdata: Subject<customerForm>;
  public customerdata$: Observable<customerForm>;

  constructor() { 
    this.customerdata = new Subject<customerForm>();
    this.customerdata$ = this.customerdata.asObservable();
  }

  public customerFormData(data: customerForm){
    this.customerdata.next(data);
  }

}
