import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customerForm } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form-container',
  templateUrl: './customer-form-container.component.html',
  styleUrls: ['./customer-form-container.component.scss']
})
export class CustomerFormContainerComponent implements OnInit {

  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit(): void {
  }

  recievedData(data: customerForm){
    this.customerService.post(data).subscribe(() =>{
      alert("data added");
      this.route.navigateByUrl('/customer/list')
    });
  }
}
