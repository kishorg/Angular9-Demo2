import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';



@NgModule({
  declarations: [CustomerListComponent, CustomerFeedbackComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
