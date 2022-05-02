import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { EmployeeFilterPresentationComponent } from '../../employee-form-container/employee-form-presentation/employee-filter-presentation/employee-filter-presentation.component';

@Injectable()
export class EmployeeListPresenterService {

  constructor(private overlay: Overlay) { }

  onFilter(){
    const OverlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    })

    const component = new ComponentPortal(EmployeeFilterPresentationComponent)
    const componentRef = OverlayRef.attach(component);

    OverlayRef.backdropClick().subscribe(() => {
      OverlayRef.detach();
    })

    componentRef.instance.emitFilterData.subscribe((data) => {
      console.log(data);
    })
  }


}
