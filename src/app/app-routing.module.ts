import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { authGuard } from './services/auth.guard';
import { StudentSideBarComponent } from './student/student-side-bar/student-side-bar.component';
import { StudentDashBoardComponent } from './student/student-dash-board/student-dash-board.component';
import { TeacherClassesComponent } from './teacher/teacher-classes/teacher-classes.component';
import { ProfileComponent } from './student/profile/profile.component';

const routes: Routes = [
  {path:"signin",component:LoginComponent},
  {path:"",redirectTo:"signin",pathMatch:"full"},
  {path:"signup",component:SignUpComponent},
  {path:"teacher",canActivate:[authGuard], component:SidebarComponent ,children:[
    {path:"",component:TeacherDashboardComponent},
    {path:"courses",component:TeacherCoursesComponent},
    {path:"classes",component:TeacherClassesComponent},
  ]},
  {path:"student",canActivate:[authGuard],component:StudentSideBarComponent,children:[
    {path:"",component:StudentDashBoardComponent},
    {path:"profile",component:ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
