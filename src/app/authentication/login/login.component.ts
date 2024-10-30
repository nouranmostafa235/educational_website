import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentcationService } from 'src/app/services/authentcation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private service:AuthentcationService,private route:Router){}
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
        localStorage.setItem('token',"Bearer "+response.data.access_token) 
        this.service.decode() 
        if(response.data.user.role==='student'){          
              this.route.navigate(['/student'])
        }  
        else{
          this.route.navigate(['/teacher'])
        }    
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
