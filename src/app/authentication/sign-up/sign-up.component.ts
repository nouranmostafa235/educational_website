import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentcationService } from 'src/app/services/authentcation.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private service: AuthentcationService ,private router :Router) { }
  //nouranmoustafa@gmail.com
  //Password#1234
  //mohammedelsedawy@gmail.com
  //stu123@gmail.com
  //Student123#
  
  errorMessages: any[] = []
  isloading:boolean=false
  signUpForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required,Validators.minLength(3)]),
    last_name: new FormControl(null, [Validators.required,Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    password_confirmation: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/gm)]),
    email: new FormControl(null, [Validators.required,Validators.email]),
  })
  handleSignup(signupData: FormGroup) {
    this.isloading=true
    this.service.register(signupData.value).subscribe({
      next: (response) => {
        this.isloading=false
        if(response.message === "User registered successfully."){
          Swal.fire({
            icon: "success",
            text: "Registration done successfully",
          }).then(()=>{
            this.router.navigate(["signin"])
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
