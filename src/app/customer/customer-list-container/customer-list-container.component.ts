import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { customerForm } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.scss']
})
export class CustomerListContainerComponent implements OnInit {

  customerForm$: Observable<customerForm[]>

  constructor(private customerService: CustomerService) {
    this.customerForm$ = new Observable<customerForm[]>();
   }

  ngOnInit(): void {

    this.customerForm$ = this.customerService.get();
  }

}
