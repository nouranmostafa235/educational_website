import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentcationService {

  constructor(private http:HttpClient) { }
  login(loginData:any):Observable<any>{
   return this.http.post("http://127.0.0.1:8000/api/login",loginData)
  }
  register(registerData:any):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/register",registerData)
   }
}
