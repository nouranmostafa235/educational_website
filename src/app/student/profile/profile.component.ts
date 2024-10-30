import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthentcationService } from 'src/app/services/authentcation.service';
import { TeacherFeaturesService } from 'src/app/services/teacher-features.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
 constructor(private service:AuthentcationService, private feature:TeacherFeaturesService){}
  studentData:any
  studentId:any
  updateForm:FormGroup=new FormGroup({
    first_name:new FormControl(),
    last_name:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
  })
  ngOnInit(): void {
    this.service.getUserByToken().subscribe({
      next:(response)=>{
        this.studentData=response.data.user
        this.studentId=this.studentData.id
        this.updateForm.patchValue({
          first_name:this.studentData.first_name,
          last_name:this.studentData.last_name,
          phone:this.studentData.phone,
          email:this.studentData.email,

        })
      }
    })
  }
updateProfile(form:any){
  this.feature.update(this.studentId,form.value).subscribe({
    next:(response)=>{
      console.log(response);
      if(response.message === "User updated successfully"){
        Swal.fire({
          icon: "success",
          text: "Profile updated successfully",
        }).then(()=>{
          window.location.reload();
        });
      }
    },
    error:(err)=>{
      Swal.fire({
        icon: "error",
        title:"oopps...",
        text: err.error.message,
      })
    }
  })
}
}
