import { Component, OnInit, Output } from '@angular/core';
import { AuthentcationService } from '../services/authentcation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
 constructor(private service:AuthentcationService, private route:Router){}
 ParentuserInfo:any
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
