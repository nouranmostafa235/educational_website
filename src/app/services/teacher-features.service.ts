import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherFeaturesService {

  constructor(private http:HttpClient) { }
  header:any={
    Authorization : localStorage.getItem("token")
  }
  addCourse(form:any):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/store/course",form,{headers:this.header})
  }
  viewCourses():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/courses/index",{headers:this.header})
  }
}
