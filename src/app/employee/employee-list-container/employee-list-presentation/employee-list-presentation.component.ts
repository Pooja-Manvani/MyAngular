import { Component, Input, OnInit } from '@angular/core';
import { UserForm } from '../../employee.model';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss']
})
export class EmployeeListPresentationComponent implements OnInit {

  private _userlist: UserForm[]

  @Input() set userlist(value: UserForm[] | null ){
    if (value){
      this._userlist = value
    }
  }

  public get userlist(): UserForm[] | null {
    return this._userlist
  }

  constructor() {
    this._userlist = [];
   }

  ngOnInit(): void {
  }

}
