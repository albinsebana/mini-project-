import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('3000ms', style({ opacity: 1 }))]),
    ]),
  ],
})
export class AppComponent {
  title = 'Welcome to Student Api';
  studentData:any;

  constructor(private studentinfo:StudentService,private router:Router)
  {
    studentinfo.students().subscribe((data) => {
      this.studentData = data;
      console.log(this.studentData)
    })
  }
  updateStudent(){
    this.router.navigateByUrl('/update')
  }
  addStudent(){
    this.router.navigateByUrl('/add')
  }
  deleteStudent(){
    this.router.navigateByUrl('/remove')
  }

}
