import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { TeacherSearchPipe } from './teacher-search.pipe';
import { StudentSideBarComponent } from './student/student-side-bar/student-side-bar.component';
import { StudentDashBoardComponent } from './student/student-dash-board/student-dash-board.component';
import { TeacherClassesComponent } from './teacher/teacher-classes/teacher-classes.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseChartDirective } from 'ng2-charts';
import { ProfileComponent } from './student/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignUpComponent,
    CalendarComponent,
    SidebarComponent,
    RightbarComponent,
    TeacherDashboardComponent,
    TeacherCoursesComponent,
    TeacherSearchPipe,
    StudentSideBarComponent,
    StudentDashBoardComponent,
    TeacherClassesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule,
    BrowserAnimationsModule,
    BaseChartDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
