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

  private _userlist: UserForm[];
  public filterData: any;
  copyData: any;
  Employees: any;
  finalData: any;
  tableData: any;
  nodatafound: boolean;
  notification: boolean;
  count: boolean;

  @Input() set userlist(value: UserForm[] | null ){
    if (value){
      this._userlist = value
    }
  }

  @Output() public emitDeleteid: EventEmitter<number>;

  public get userlist(): UserForm[] | null {
    return this._userlist
  }

  constructor(private Service:EmployeeListPresenterService, private overlay:Overlay) {
    this._userlist = [];
    this.emitDeleteid = new EventEmitter<number>();
   }

  ngOnInit(): void {
  
  }

  onDelete(id:number){
    this.emitDeleteid.emit(id);
  }

  onFilter(){
    const OverlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    })

    const component = new ComponentPortal(EmployeeFilterPresentationComponent)
    const componentRef = OverlayRef.attach(component);

    OverlayRef.backdropClick().subscribe(() => {
      OverlayRef.detach();
    })

    componentRef.instance.emitCancel.subscribe(() => {
      OverlayRef.detach();
    })
    
    componentRef.instance.emitFilterData.subscribe((data) => {
      this.filterData = data;
      // this.filtering();
      // OverlayRef.detach();

      
      let Keys = Object.keys(this.filterData)

      Keys.forEach((items: any) => {
        if (this.filterData[items]) {
          this.count = true;
        }
      })

      if (this.count) {
        this.filtering();
        this.notification = true;
      } else {
        this.notification = false;
      }

      OverlayRef.detach();
    });

    if (this.filterData) {
      componentRef.instance.listdata = this.filterData;
    }
  }


  public filtering(){
    if (!this.copyData) {
      this.copyData = [...this._userlist]
    }

    let Keys = Object.keys(this.filterData);

    Keys.forEach((items: any) => {
      if (this.filterData[items]) {
        this.finalData = this.copyData.filter((data: any) => {
          return data[items] === this.filterData[items]
        })
      }
    });

    this._userlist = this.finalData;

    if (this.finalData.length === 0) {
      this.nodatafound = true;
    } else {
      this.nodatafound = false;
    }
  }
  
}
