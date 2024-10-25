import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  {path:"signin",component:LoginComponent},
  {path:"",redirectTo:"signin",pathMatch:"full"},
  {path:"signup",component:SignUpComponent},
  {path:"teacher",canActivate:[authGuard], component:SidebarComponent ,children:[{path:"",component:TeacherDashboardComponent},
    {path:"courses",component:TeacherCoursesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
