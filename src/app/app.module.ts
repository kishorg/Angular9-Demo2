import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { ApplyColorDirective } from './apply-color.directive';
import { CustomAttDemoComponent } from './custom-att-demo/custom-att-demo.component';
import { UseDataServiceComponent } from './use-data-service/use-data-service.component';
import { Trim2lengthPipe } from './trim2length.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { APICallDemoComponent } from './apicall-demo/apicall-demo.component';
import { GuardService } from './guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DataBindingComponent,
    StructuralDirectiveDemoComponent,
    ApplyColorDirective,
    CustomAttDemoComponent,
    UseDataServiceComponent,
    Trim2lengthPipe,
    ProductDetailsComponent,
    ObservableDemoComponent,
    APICallDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path:'', component:APICallDemoComponent},
        {path:'home', component:DataBindingComponent},
        {path:'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
        {path:'about', component:UseDataServiceComponent},
        {path:'contact', component:ProductListComponent, 
          canActivate: [GuardService],
          children: [{path:'product-details/:pid', component:ProductDetailsComponent}]
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
