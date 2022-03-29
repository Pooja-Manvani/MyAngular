import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForm } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss']
})
export class EmployeeFormContainerComponent implements OnInit {

  constructor(private Service:EmployeeService, private route:Router ) { 
    
  }

  ngOnInit(): void {
  }

  formdata(Data: UserForm){
    this.Service.postdata(Data).subscribe(() => {
      alert("Data added");
      this.route.navigateByUrl('/employee/list');
    })
  }
}
