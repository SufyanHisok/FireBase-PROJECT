import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { MaterialModule } from '../Material/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [
    AddStudentComponent,
    ViewStudentComponent
  ],
  imports: [
    FormsModule,
    NgxIntlTelInputModule,
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
  ]
})
export class StudentsModule { }
