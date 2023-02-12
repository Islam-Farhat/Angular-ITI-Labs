import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  courseNames:string[]=[]
  courseName:string=""
  addCousre(){
    this.courseNames.push(this.courseName)
    this.courseName=" "
  }
  removeCourse(index:number)
  {
    this.courseNames=this.courseNames.filter((item,i)=>index!=i)
  }
}
