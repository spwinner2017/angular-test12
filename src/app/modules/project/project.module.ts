import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { EmployeeLayoutComponent } from './employee/employee-layout/employee-layout.component';
import { FeedbackComponent } from './employee/feedback/feedback.component';
import { ProjectListComponent } from './employee/project-list/project-list.component'
import { RatingComponent } from '../../rating/rating.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManagerLayoutComponent } from './manager/manager-layout.component';
import { RedTextDirective } from 'src/app/red-text.directive';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [ EmployeeLayoutComponent, 
    FeedbackComponent,
     ProjectListComponent,     
      ManagerLayoutComponent, 
      RedTextDirective,
      RatingComponent]
})
export class ProjectModule { }