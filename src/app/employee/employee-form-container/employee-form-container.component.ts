import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { customerForm } from 'src/app/customer/customer.model';
import { UserForm } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss']
})
export class EmployeeFormContainerComponent implements OnInit {

  public getByiddata$:Observable<UserForm>
  public getid:number;
  constructor(private Service:EmployeeService, private route:Router , private active:ActivatedRoute) { 
    this.getid = this.active.snapshot.params['id'];
    this.getByiddata$ = new Observable<UserForm>();
  }

  ngOnInit(): void {
    this.getByiddata$ = this.Service.getbyid(this.getid)
  }

  public formdata(Data: UserForm){
    this.Service.postdata(Data).subscribe(() => {
      alert("Data added");
      this.route.navigateByUrl('/employee/list');
    })
  }


}
