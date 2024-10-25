import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentcationService {
userData = new BehaviorSubject(null)

  constructor(private http:HttpClient , private router:Router) { 
    if(localStorage.getItem('token')!==null){
      this.decode()
    }
  }
  decode(){
    let token= JSON.stringify( localStorage.getItem('token') )
    // let decodedToken:any = jwtDecode(token)
    let decodedToken:any = localStorage.getItem('token')
    this.userData.next (decodedToken)
  }
  logOut(){
    localStorage.removeItem('token')
    this.userData.next(null)
    this.router.navigate(['/signin'])
  }
  login(loginData:any):Observable<any>{
   return this.http.post("http://127.0.0.1:8000/api/login",loginData)
  }
  register(registerData:any):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/register",registerData)
   }
}
