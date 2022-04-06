import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent  },
  {path: 'student', loadChildren:()=>import('./students/students.module').then(mod => mod.StudentsModule) },
  {path: 'teacher', loadChildren:()=>import('./teachers/teachers.module').then(mod => mod.TeachersModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
