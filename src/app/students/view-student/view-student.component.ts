import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  StudentData: student[] = [];

  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
  this.Students()
  }

Students() {
   this.studentService.getStudent(student).subscribe((res: student[]) => {
     this.StudentData = res;
   });
 }

}
