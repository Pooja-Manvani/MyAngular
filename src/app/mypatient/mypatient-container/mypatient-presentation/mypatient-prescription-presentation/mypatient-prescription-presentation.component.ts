import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypatient-prescription-presentation',
  templateUrl: './mypatient-prescription-presentation.component.html',
  styleUrls: ['./mypatient-prescription-presentation.component.scss']
})
export class MypatientPrescriptionPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  id:any = '';
  accordion(ids:any){
    if(this.id == ids){
      this.id = '';
    }
    else{
      this.id = ids;
    }
  }

}
