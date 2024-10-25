import { Component } from '@angular/core';
import { AuthentcationService } from '../services/authentcation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 constructor(private service:AuthentcationService, private route:Router){}

 logoutFun(){
  this.service.logOut()
 }
}
