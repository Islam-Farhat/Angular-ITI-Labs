import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersservService } from 'src/app/services/usersserv.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  // value1:string="";
  // show(userform:any){
  //   console.log(userform)
  // }
  userid:any;
  password:string="";
  name:string="";
  constructor(public userservice:UsersservService,public r:Router,public acitvateRouter:ActivatedRoute)
  {
    this.userid=this.acitvateRouter.snapshot.params["id"];
  }
  ngOnInit(): void {
    if(this.userid){
      this.userservice.getUserByID(this.userid).subscribe((response)=>{
        this.name=response.name;
        this.password=response.password;
       })
    }
  }
  
  userobj:User=new User(this.name,this.password)
  
  Save()
  {
    if(this.userid){
      this.userobj.name=this.name;
  this.userobj.password=this.password;
  this.userservice.editUser(this.userid,this.userobj).subscribe((a)=>{
  this.r.navigateByUrl("/users")
 });
    }
  else{
    this.userobj.name=this.name;
  this.userobj.password=this.password;
  this.userservice.usersdata.push(this.userobj)
  this.userservice.addUser(this.userobj).subscribe((a)=>{
  this.r.navigateByUrl("/users")
 });
  }
}
}
