import { Component, Input, OnInit } from '@angular/core';
import { patientData } from 'src/app/mypatient/mypatient.model';

@Component({
  selector: 'app-mypatient-list-presentation',
  templateUrl: './mypatient-list-presentation.component.html',
  styleUrls: ['./mypatient-list-presentation.component.scss']
})
export class MypatientListPresentationComponent implements OnInit {


  private _patientData: patientData[];
  public get patientData(): patientData[] {
    return this._patientData;
  }
 @Input() public set patientData(v: patientData[] | null) {
    if (v) {
      this._patientData = v;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  showData(id: any) {
    console.log(id);

  }

}
