import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', 
  component: HomePageComponent
  },
  {path:"update",
  component:UpdateStudentComponent
},
{
  path:"add",
  component:AddStudentComponent
},
{
  path:"remove",
  component:DeleteStudentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
