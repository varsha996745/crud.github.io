import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path:'addemployee', component:AddEmployeeComponent},
  {path:'',component:EmployeeComponent},
  {path:'view/:id', component:ViewEmployeeComponent},
  {path:'delete', component:EmployeeComponent},
  {path:'update/:id', component:UpdateEmployeeComponent}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
