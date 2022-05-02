import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentFormPresenterService } from '../student-form-presenter/student-form-presenter.service';

@Component({
  selector: 'app-student-form-presentation',
  templateUrl: './student-form-presentation.component.html',
  styleUrls: ['./student-form-presentation.component.scss']
})
export class StudentFormPresentationComponent implements OnInit {

  studentFormGroup: FormGroup;
  public formtitle:string = 'Add User';
  constructor(private fb: FormBuilder,private formService:StudentFormPresenterService) {
    this.studentFormGroup = this.fb.group(
      {
        name:['',Validators.required],
        age:['',Validators.required],
        gender:['',Validators.required]
      }
    )

   }

  ngOnInit(): void {
  }

}
