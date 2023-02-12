import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentservService } from 'src/app/services/departmentserv.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  // mynum:string="from Parent";
  // getData(data:Event){
  //   alert(data)
  // }
  ////////////////////////////////////////////////////////

  departmentlist:Department[]=[];
  department:Department=new Department();
  constructor(public deprtmentserv:DepartmentservService) //request object from departmentderv
  {

  }
  save()
  {
    this.deprtmentserv.adddepartment(this.department);
  }
  ngOnInit(): void {
    this.departmentlist=this.deprtmentserv.getalldepartments();
  }
  
}
