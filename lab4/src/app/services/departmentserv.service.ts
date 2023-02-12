import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentservService {

  departmentlist:Department[]=[
    new Department(1,"islam"),
    new Department(2,"mo"),
    new Department(3,"ali"),
    new Department(4,"ibramim"),
  ];
  constructor() { }
  getalldepartments()
  {
    return this.departmentlist;
  }
  adddepartment(dept:Department)
  {
    this.departmentlist.push(new Department(dept.id,dept.name))
  }
}
