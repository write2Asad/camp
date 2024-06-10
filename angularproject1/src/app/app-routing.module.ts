import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views/views.component';
import { RentComponent } from './views/rent/rent.component';
import { AdminComponent } from './views/admin/admin.component';
import { SalesComponent } from './views/sales/sales.component';
import { StudentDataComponent } from './views/student-data/student-data.component';
import { StudentListComponent } from './views/student-list/student-list.component';
import { NavigationComponent } from './views/shared/navigation/navigation.component';




export const routes: Routes = [
  { path: '', component: ViewsComponent },

  { 
    path: 'views', 
    component: ViewsComponent,
    title:'Views Page',
    children: [
      { path: 'rent', component: RentComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'sales', component: SalesComponent }, 
      { path: 'navigation', component: NavigationComponent },
      { path: 'studentdata', component: StudentDataComponent }, 
      { path: 'studentlist', component: StudentListComponent }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
