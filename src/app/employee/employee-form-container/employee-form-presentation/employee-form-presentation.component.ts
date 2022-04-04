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

  @Input() public set getdata(data:UserForm | null){
    if(data){
      this.Userformgroup.patchValue(data)
    }
  }
  @Output() public emitFormdata : EventEmitter<UserForm>
  
  Userformgroup: FormGroup;

  constructor(private fb: FormBuilder, private service:EmployeeFormPresenterService) {
    this.Userformgroup = this.fb.group(
      {
        name:['',Validators.required],
        age:['',Validators.required],
        gender:['',Validators.required]
      }
    )

    this.emitFormdata = new EventEmitter<UserForm>();

   }

  ngOnInit(): void {
    this.service.getdata$.subscribe(data => {
      this.emitFormdata.emit(data);
    })
  }

  OnSubmit(){
    this.service.getFormdata(this.Userformgroup.value);
  }
}
