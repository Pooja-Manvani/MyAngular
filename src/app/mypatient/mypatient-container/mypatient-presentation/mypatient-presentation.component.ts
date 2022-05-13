import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { patientData } from '../../mypatient.model';
import { MypatientService } from '../../mypatient.service';

@Component({
  selector: 'app-mypatient-presentation',
  templateUrl: './mypatient-presentation.component.html',
  styleUrls: ['./mypatient-presentation.component.scss']
})
export class MypatientPresentationComponent implements OnInit {

  
  public PatientListData$: Observable<patientData[]>

  constructor(private service: MypatientService) { 
    this.PatientListData$ = new Observable();
  }

  
  ngOnInit(): void {
    this.PatientListData$ = this.service.getdata();
  }

 
}
