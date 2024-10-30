import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teacherSearch'
})
export class TeacherSearchPipe implements PipeTransform {

  transform(userdata:any[], searchTerm:string): any[] {

    if(!userdata || !searchTerm){
      return userdata
    }
    return userdata.filter(data=>data.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())||data.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

}
