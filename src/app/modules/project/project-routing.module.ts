import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeLayoutComponent } from './employee/employee-layout/employee-layout.component'
import { ManagerLayoutComponent } from './manager/manager-layout.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeLayoutComponent
  },
  {
    path: 'review',
    component: ManagerLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
