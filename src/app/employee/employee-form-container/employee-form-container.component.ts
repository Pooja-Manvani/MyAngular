import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserForm } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss']
})
export class EmployeeFormContainerComponent implements OnInit {

  public getByidData$:Observable<UserForm>;
  public getid:number;
  constructor(private Service:EmployeeService, private route:Router, private active:ActivatedRoute) { 
   this.getid = this.active.snapshot.params['id'];
   this.getByidData$ = new Observable();
  }

  ngOnInit(): void {
    this.getByidData$ = this.Service.getbyid(this.getid)
  }

  public formdata(Data: UserForm){
    this.Service.postdata(Data).subscribe(() => {
      alert("Data added");
      this.route.navigateByUrl('/employee/list');
    })
  }
  
  public emitUpdateData(data:UserForm){
    this.Service.updateData(this.getid,data).subscribe(() => {
      alert("Data Updated");
      this.route.navigateByUrl('/employee/list');
    })
  }

}
