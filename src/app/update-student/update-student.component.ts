import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})

export class UpdateStudentComponent {
  updateStudent = new FormGroup({
    id: new FormControl(''),  // Add this line
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    isMale: new FormControl(''),
    rollNo: new FormControl(''),
    date: new FormControl('')
  });  
  studentData:any;
  student:any =[{}]
  constructor(private studentInfo:StudentService){
    studentInfo.students().subscribe((data)=>{
      this.studentData=data
    })
  }

  getSelectedValue(event:any){
    console.log(event.target.value);
    this.studentInfo.studentById(event.target.value).subscribe((data)=>{
      this.student=data;//array
    })
  }
  

  updateStudentData(data: any) {
    this.studentInfo.updateStudent(data).subscribe({
      next: (result) => {
        alert("Student updated successfully");
        console.log(result);
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
      }
    });
  }
  
}
