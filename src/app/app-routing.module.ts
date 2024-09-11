import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const route: Routes = [ { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: UserComponent },
  { path: 'students/edit/:id', component: EditStudentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
