import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersservService } from 'src/app/services/usersserv.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users:any;
  constructor(public usersservice:UsersservService){

  }
  ngOnInit(): void { 
   this.usersservice.getAllUsers().subscribe((response)=>{
    this.users=response;
   })
  }

  DeleteUser(id:any){
    this.usersservice.deleteUser(id).subscribe((response)=>{
      this.users=this.users.filter((user:any)=>{
        return user.id!=id;
      })
     })
  }
  
}
