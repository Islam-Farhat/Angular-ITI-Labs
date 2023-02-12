import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  flag:boolean=false;
  flagAge:boolean=false;
  
  studentsNames:string[]=[];
  studentsAges:number[]=[];

  studentName:string="";
  studentAge:number=0;
  addStudent()
  {
    if (!String(this.studentName).match(/^[a-zA-Z]{3,}/)) {
      this.flag=true;
    }
    else {
      this.flag=false;
    }
    if (!String(this.studentAge).match(/^[1-9]/) || this.studentAge<18) {
      this.flagAge=true;
    }
    else {
      this.flagAge=false;
    }
    if(this.flag==false&&this.flagAge==false){
      this.studentsNames.push(this.studentName)
      this.studentsAges.push(this.studentAge)
    }
  }
  removeStudent(index:number)
  {
    this.studentsNames=this.studentsNames.filter((item,i)=>index!=i)
    this.studentsAges=this.studentsAges.filter((item,i)=>index!=i)
  }
}
