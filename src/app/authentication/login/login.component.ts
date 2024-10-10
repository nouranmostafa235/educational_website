import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentcationService } from 'src/app/services/authentcation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private service:AuthentcationService){}
  isloading:boolean=false
  loginForm:FormGroup= new FormGroup({
    email : new FormControl(null,[Validators.required, Validators.pattern(/^[a-zA-Z]+[0-9]*@[a-z]+.com$/gm)]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)])
  })
 handleLogin(form:FormGroup){
  this.isloading=true
   this.service.login(form.value).subscribe({
    next:(response)=>{
      this.isloading=false
      if(response.message==="User logged in successfully."){
        Swal.fire({
          icon: "success",
          text: "sign in done Successfully",
        }).then(()=>{
          this.isloading=false
        });
        
      }    
    },
    error:(err)=>{
      Swal.fire({
        icon: "error",
        title:"ooppss...",
        text: err.error.message,
      }).then(()=>{
        this.isloading=false
      });     
    }
   })

 }
}
