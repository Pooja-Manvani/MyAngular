import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../mvpfilter.model';
import { MvpfilterService } from '../mvpfilter.service';

@Component({
  selector: 'app-mvpfilter-form-container',
  templateUrl: './mvpfilter-form-container.component.html',
  styleUrls: ['./mvpfilter-form-container.component.scss']
})
export class MvpfilterFormContainerComponent implements OnInit {

  public id!: string;
  public userData$: Observable<User> | undefined
  

  constructor(
    private mvpfilterService: MvpfilterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.userData$ = new Observable();
    console.log(this.activatedRoute)
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)

    if (this.id) {
      this.userData$ = this.mvpfilterService.getuserById(this.id);
    }
  }

  ngOnInit(): void {
  }

  addUser(UserForm: User) {
    this.mvpfilterService.adduser(UserForm).subscribe(
      (res: any) => {
        alert('Post success')
        this.router.navigateByUrl('mvpfilter/list');
      }
    );
  }

  editUser(UserForm: User) {
    this.mvpfilterService.edituser(UserForm,this.id).subscribe(
      (res: any) => {
        alert('Edit success')
        this.router.navigateByUrl('mvpfilter/list');
      }
    );
  }
}

