import { Component, Input, OnInit } from '@angular/core';
import { AuthentcationService } from '../services/authentcation.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent implements OnInit{
 constructor(private service:AuthentcationService){}
userInfo:any
ngOnInit(): void {  
  this.service.getUserByToken().subscribe({
    next:(res)=>{
      this.userInfo=res.data.user      
    }
  })
}
}
