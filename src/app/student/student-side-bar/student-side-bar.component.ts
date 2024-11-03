import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentcationService } from 'src/app/services/authentcation.service';
@Component({
  selector: 'app-student-side-bar',
  templateUrl: './student-side-bar.component.html',
  styleUrls: ['./student-side-bar.component.css']
})
export class StudentSideBarComponent implements OnInit{
  constructor(private service:AuthentcationService, private route:Router){}
  ParentuserInfo:any
  data:string="from Parenst"
  ngOnInit(): void {
   this.service.getUserByToken().subscribe({
    next:(response)=>{
     this.ParentuserInfo= response.data.user
    }
   })
 }
  logoutFun(){
   this.service.logOut()
  }

}
