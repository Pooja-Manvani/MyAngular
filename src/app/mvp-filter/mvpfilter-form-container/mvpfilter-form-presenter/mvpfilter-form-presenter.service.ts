import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MvpfilterFormPresenterService {
  userFormData$: any;
  private customerFormData: Subject<any>;
  public customerFormData$: Observable<any>;
 

  constructor(private fb: FormBuilder) { 
    this.customerFormData = new Subject();
    this.customerFormData$ = new Observable();

    this.customerFormData$ = this.customerFormData.asObservable();
  }

  buildForm() {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required ],
      gender: ['', Validators.required]
    })
  }

  onSubmit(UserForm: any) {
    if (!UserForm.valid) {
      return
    }

    this.customerFormData.next(UserForm.value);
  }
}
