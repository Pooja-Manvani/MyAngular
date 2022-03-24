import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../mvpfilter.model';
import { MvpfilterService } from '../mvpfilter.service';

@Component({
  selector: 'app-mvpfilter-list-container',
  templateUrl: './mvpfilter-list-container.component.html',
  styleUrls: ['./mvpfilter-list-container.component.scss']
})
export class MvpfilterListContainerComponent implements OnInit {

  // public userList$: Observable<User[]>;
public userList:any
  constructor(
    private mvpfilterService: MvpfilterService
  ) {
    // this.userList$ = new Observable();
  }

  ngOnInit(): void {
    this.mvpfilterService.getdata().subscribe((res:any)=>{
      debugger
      this.userList = res;
    })
  }

}
