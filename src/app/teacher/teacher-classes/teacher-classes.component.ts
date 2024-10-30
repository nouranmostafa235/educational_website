import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthentcationService } from 'src/app/services/authentcation.service';
import { TeacherFeaturesService } from 'src/app/services/teacher-features.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-classes',
  templateUrl: './teacher-classes.component.html',
  styleUrls: ['./teacher-classes.component.css']
})
export class TeacherClassesComponent implements OnInit{
  courses:any
  students:any
  id:string="20240010"
  addStudent:FormGroup=new FormGroup({
    courseId:new FormControl(null),
    student_id:new FormControl(null),
  })
constructor(private auth :AuthentcationService , private features:TeacherFeaturesService){}
ngOnInit(): void {
  this.auth.getUserByToken().subscribe({
    next:(response)=>{
      this.courses=response.data.user.assigned_courses
      this.students=response.data.user.assigned_courses[0].students
      console.log(this.students);
      
    }
  })
}
add(form:FormGroup){
  this.features.enrollStudent(form.value.courseId,form.value).subscribe({
    next:(response)=>{
      if(response.message==="Course retrieved successfully."){
        Swal.fire({
          icon: "success",
          text: "Studend is added Successfully",
          confirmButtonText: 'OK'
        }).then((result)=>{
          if (result.isConfirmed) {
            this.ngOnInit()
          }
        });
      }
    },
    error: (err)=>{
      console.log(err);
      
          Swal.fire({
          title:"ooppss...",
          icon:"error",
          text: err.error.message,
          confirmButtonText:"OK"
        }).then((result)=>{
          if (result.isConfirmed) {
           this.ngOnInit()
          }
        });
    }
  })  
}
}
