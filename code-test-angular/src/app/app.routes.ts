import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AddCustomerComponent } from './content/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './content/update-customer/update-customer.component';

export const routes: Routes = [
  {path:'', component:ContentComponent},
  {path:'add-customer',component:AddCustomerComponent},
  {path:'update-customer/:id',component:UpdateCustomerComponent}
];
