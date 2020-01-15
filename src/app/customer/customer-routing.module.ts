import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';


const routes: Routes = [
    {path:'', component: CustomerListComponent},
    {path:'feedback', component: CustomerFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
