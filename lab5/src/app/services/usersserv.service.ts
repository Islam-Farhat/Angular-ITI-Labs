import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersservService {

  ARIUrl:string="http://localhost:5000/users"
  usersdata:User[]=[];
  constructor(public http:HttpClient) {
    this.getAllUsers().subscribe((users)=>{
      this.usersdata=users;
    })
   }
  getAllUsers()
  {
    return this.http.get<User[]>(this.ARIUrl)
  }
  getUserByID(id:number){
    return this.http.get<User>(`${this.ARIUrl}/${id}`)
  }
  addUser(user:User)
  {
    return this.http.post<User>(this.ARIUrl,user)
  }
  editUser(id:number,user:any)
  {
    return this.http.put<User>(`${this.ARIUrl}/${id }`,user)
  }
  deleteUser(id:number){
    return this.http.delete(`${this.ARIUrl}/${id}`)
  }
}
