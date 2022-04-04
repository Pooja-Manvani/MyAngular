import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customerForm } from '../../customer.model';
import { CustomerService } from '../../customer.service';
import { CustomerFormPresenterService } from '../customer-form-presenter/customer-form-presenter.service';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.scss']
})
export class CustomerFormPresentationComponent implements OnInit {

  @Output() public emitFormData: EventEmitter<customerForm>;

  customerFormGroup: FormGroup
  constructor(private fb:FormBuilder, private customerformService: CustomerFormPresenterService) {
    this.customerFormGroup = this.fb.group({
      name: ['',Validators.required],
      age: ['',Validators.required],
      gender: ['',Validators.required],
    })

    this.emitFormData = new EventEmitter<customerForm>();
   }

  ngOnInit(): void {
    this.customerformService.customerdata.subscribe(data =>{
      this.emitFormData.emit(data) 
    })
  }

  OnSubmit(){
    this.customerformService.customerFormData(this.customerFormGroup.value)
  }

}
