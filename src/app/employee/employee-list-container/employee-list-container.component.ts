import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { UserForm } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.scss']
})
export class EmployeeListContainerComponent implements OnInit {

  UserFormdata$: Observable<UserForm[]>

  constructor(private EmployeeService:EmployeeService) {
    this.UserFormdata$ = new Observable();
   }

  ngOnInit(): void {
    this.UserFormdata$ = this.EmployeeService.getdata();
  }


}
