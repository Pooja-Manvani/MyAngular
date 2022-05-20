import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypatient-prescription-presentation',
  templateUrl: './mypatient-prescription-presentation.component.html',
  styleUrls: ['./mypatient-prescription-presentation.component.scss']
})
export class MypatientPrescriptionPresentationComponent implements OnInit {

  data: any = [{
    "parentName": "Diarrhea, Fever",
    "childProperties":
      [
        { Medicine: "Paracetamol", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
        { Medicine: "Ibuprofen", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
        { Medicine: "Ibuprofen", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
        { Medicine: "Ibuprofen", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
      ] 
  }, {
    "parentName": "Dipression, Fever",
    "childProperties":
    [
      { Medicine: "Paracetamol", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
      { Medicine: "Paracetamol", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
      { Medicine: "Ibuprofen", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
      { Medicine: "Ibuprofen", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
    ]
  }, {
    "parentName": "Diarrhea, Fever",
    "childProperties":
    [
      { Medicine: "Paracetamol", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
      { Medicine: "Paracetamol", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
      { Medicine: "Ibuprofen", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
      { Medicine: "Ibuprofen", dosage: 1, Timing: "Mo,Af,Ni After meal", days: 2 },
    ]
  }];

  selectedData = [
    { id: 1, content: "lorem1" },
    { id: 2, content: "lorem2" },
    { id: 3, content: "lorem33" },
    { id: 4, content: "lorem4" },
    { id: 5, content: "lorem5" },
    { id: 6, content: "lorem6" }
  ];
  activeIndex: number;

  toggleAccordian(event:any, i: number) {
    event.preventDefault();
    console.log(event)
    this.activeIndex = i;
    console.log(this.activeIndex);
  }
  
  constructor() { }

  // toggleAccordian(event: { target: any; }, index: string | number) {
  //   const element = event.target;
  //   element.classList.toggle("active");
  //   if (this.data[index].isActive) {
  //     this.data[index].isActive = false;
  //   } else {
  //     this.data[index].isActive = true;
  //   }
  //   const panel = element.nextElementSibling;
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;
  //   } else {
  //     panel.style.maxHeight = panel.scrollHeight + "px";
  //   }
  // }
  
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
