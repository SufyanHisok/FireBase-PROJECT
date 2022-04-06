import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { student } from 'src/app/models/student.model';
import { setDoc } from 'firebase/firestore';
import { FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {



  Students: student = {Title: '', RollNo: '', Field: '', Age: 0};

  constructor(private studentService:StudentService) { 
    this.Students = new student();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.studentService.addStudent(this.Students);  
 }
}
