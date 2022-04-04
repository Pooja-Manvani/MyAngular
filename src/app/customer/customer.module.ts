import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormContainerComponent,
    CustomerListContainerComponent,
    CustomerFormPresentationComponent,
    CustomerListPresentationComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
