import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';


@NgModule({
  declarations: [
    AddTeacherComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
