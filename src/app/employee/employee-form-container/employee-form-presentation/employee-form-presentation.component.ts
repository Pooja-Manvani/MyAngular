import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../../employee.model';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.scss']
})
export class EmployeeFormPresentationComponent implements OnInit {

  @Input() public set editData(data:UserForm | null){
    if(data){
      this.Userformgroup.patchValue(data);
      this.formtitle = 'Edit User';
    }
  }
  @Output() public emitFormdata : EventEmitter<UserForm>;
  @Output() public emitUpdateData : EventEmitter<UserForm>;
  
  Userformgroup: FormGroup;
  public formtitle:string = 'Add User';
  constructor(private fb: FormBuilder, private service:EmployeeFormPresenterService) {
    this.Userformgroup = this.fb.group(
      {
        name:['',Validators.required],
        age:['',Validators.required],
        gender:['',Validators.required]
      }
    )

    this.emitFormdata = new EventEmitter<UserForm>();
    this.emitUpdateData = new EventEmitter<UserForm>();

   }

  ngOnInit(): void {
    this.service.getdata$.subscribe(data => {
      if(this.formtitle === 'Add User'){
        this.emitFormdata.emit(data)
      }else{
        this.emitUpdateData.emit(data)
      }
    })
  }

  OnSubmit(){
    this.service.getFormdata(this.Userformgroup.value);
  }
}
