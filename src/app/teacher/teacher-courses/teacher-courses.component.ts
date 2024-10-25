import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherFeaturesService } from 'src/app/services/teacher-features.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css']
})
export class TeacherCoursesComponent implements OnInit{
 constructor(private service:TeacherFeaturesService){}
 addForm:FormGroup=new FormGroup({
  name:new FormControl(null),
  duration:new FormControl(null),
  level:new FormControl(null),
  semester:new FormControl(null),
  description:new FormControl(null),
 })
 courses:any
 ngOnInit(): void {
   this.service.viewCourses().subscribe({
    next:(response)=>{
      this.courses=response.data
      console.log(this.courses);
    }
   })

 }
  addcourse(form:FormGroup){
   this.service.addCourse(form.value).subscribe({
    next:(response)=>{
      if(response.message==="Course created successfully."){
        Swal.fire({
          icon: "success",
          text: "Data Saved Successfully",
        }).then(()=>{
          this.ngOnInit()
        });
      }
    }
   })
  }
  
}
