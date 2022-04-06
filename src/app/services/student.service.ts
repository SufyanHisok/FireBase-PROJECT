import { Injectable } from '@angular/core';
import { Firestore, setDoc, addDoc, collection,collectionData,doc, docData, deleteDoc, updateDoc, DocumentReference} from '@angular/fire/firestore'
import { student } from 'src/app/models/student.model'
import { Observable } from 'rxjs';
import { object } from 'rxfire/database';





@Injectable({
  providedIn: 'root'
})
export class StudentService {

 

  constructor( private firestore: Firestore) { }


getStudent(student: any):Observable<student[]> {
  const studentRef = collection(this.firestore, 'student');
  return collectionData(studentRef, {idField: "ID"}) as Observable<student[]>;
}

addStudent(Student: student) {
  const studentRef = collection(this.firestore, 'student');
  return addDoc(studentRef, Student);
}

}
