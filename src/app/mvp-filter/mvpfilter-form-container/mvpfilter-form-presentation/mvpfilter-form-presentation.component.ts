import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../mvpfilter.model';
import { MvpfilterFormPresenterService } from '../mvpfilter-form-presenter/mvpfilter-form-presenter.service';

@Component({
  selector: 'app-mvpfilter-form-presentation',
  templateUrl: './mvpfilter-form-presentation.component.html',
  styleUrls: ['./mvpfilter-form-presentation.component.scss']
})
export class MvpfilterFormPresentationComponent implements OnInit {

  public userForm: FormGroup;
  add: EventEmitter<any>;
  edit: EventEmitter<any>;
  formTitle: string;
  constructor(
    private mvpfilterFormPresenter: MvpfilterFormPresenterService ,
  ) { 
    this.userForm = this.mvpfilterFormPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = 'Add User'
  }

  ngOnInit(): void {
    this.mvpfilterFormPresenter.userFormData$.subscribe((res: User) => {
      // if (this.formTitle === 'Add Customer') {
      //   this.add.emit(res);
      // } else {
      //   this.edit.emit(res);
      // }
      this.formTitle === 'Add User' ? this.add.emit(res) : this.edit.emit(res);;
      this.mvpfilterFormPresenter.customerFormData$.subscribe((res:any)=>{

      })
    })
  }

  onSubmit() {
    this.mvpfilterFormPresenter.onSubmit(this.userForm.value)
  }
  onCancel() {
    // this.location.back();
  }
}