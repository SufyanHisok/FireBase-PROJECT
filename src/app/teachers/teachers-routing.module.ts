import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';

const routes: Routes = [
  {path: "addteacher", component:AddTeacherComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
