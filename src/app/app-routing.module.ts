import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views/views.component';
import { RentComponent } from './views/rent/rent.component';
import { AdminComponent } from './views/admin/admin.component';
import { SalesComponent } from './views/sales/sales.component';

export const routes: Routes = [
  { 
    path: 'views', 
    component: ViewsComponent,
    children: [
      { path: 'rent', component: RentComponent },
      { path: 'administrator', component: AdminComponent },
      { path: 'sales', component: SalesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
