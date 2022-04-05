import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { customerForm } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form-container',
  templateUrl: './customer-form-container.component.html',
  styleUrls: ['./customer-form-container.component.scss']
})
export class CustomerFormContainerComponent implements OnInit {

  public getByidData$:Observable<customerForm>;
  public getid: number;
  constructor(private customerService: CustomerService, private route: Router, private active:ActivatedRoute) { 
    this.getid = this.active.snapshot.params['id'];
    this.getByidData$ = new Observable();
  }

  ngOnInit(): void {
    this.getByidData$ = this.customerService.getbyid(this.getid)
  }

  recievedData(data: customerForm){
    this.customerService.post(data).subscribe(() =>{
      alert("data added");
      this.route.navigateByUrl('/customer/list')
    });
  }

  UpdatedData(data:customerForm){
    this.customerService.update(this.getid,data).subscribe(() =>{
      alert("Data Updated");
      this.route.navigateByUrl('/customer/list');
    })
  }
}
