import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../mvpfilter.model';
import { MvpfilterListPresenterService } from '../mvpfilter-list-presenter/mvpfilter-list-presenter.service';

@Component({
  selector: 'app-mvpfilter-list-presentation',
  templateUrl: './mvpfilter-list-presentation.component.html',
  styleUrls: ['./mvpfilter-list-presentation.component.scss']
})
export class MvpfilterListPresentationComponent implements OnInit {

  @Input() public set userList(value: User[] | null) {
    debugger
    // console.log(value);
    if (value) {
      this._userList = value;
    }
  }
  public get userList(): User[] | null {
    return this._userList;
  }

  private _userList: User[];
  constructor(
    private mvpfilterlistpresenter: MvpfilterListPresenterService,
    private router: Router
  ) {
    this._userList = [];
  }

  ngOnInit(): void {
  }

}
