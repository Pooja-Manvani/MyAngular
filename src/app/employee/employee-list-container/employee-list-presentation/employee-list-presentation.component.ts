import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeFilterPresentationComponent } from '../../employee-form-container/employee-form-presentation/employee-filter-presentation/employee-filter-presentation.component';
import { EmployeeFilterPresenterService } from '../../employee-form-container/employee-form-presentation/employee-filter-presenter/employee-filter-presenter.service';
import { UserForm } from '../../employee.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  viewProviders: [EmployeeListPresenterService]
})
export class EmployeeListPresentationComponent implements OnInit {

  private _userlist: UserForm[]

  @Input() set userlist(value: UserForm[] | null ){
    if (value){
      this._userlist = value
    }
  }

  @Output() public emitDeleteid: EventEmitter<number>;

  public get userlist(): UserForm[] | null {
    return this._userlist
  }

  constructor(private Service:EmployeeListPresenterService) {
    this._userlist = [];
    this.emitDeleteid = new EventEmitter<number>();
   }

  ngOnInit(): void {
  
  }

  onDelete(id:number){
    this.emitDeleteid.emit(id);
  }

  onFilter(){
    this.Service.onFilter();
  }
  
}
