import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { RouterModule ,Routes} from '@angular/router';
const route: Routes = [ { path: '', redirectTo: '/edit', pathMatch: 'full' },
  { path: 'students', component: UserComponent },
  { path: 'students/edit/:id', component: EditStudentComponent }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class AppModule { }
