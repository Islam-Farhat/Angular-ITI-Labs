import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersservService } from 'src/app/services/usersserv.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userID:any;
  user:any;
constructor(public activatedRouter:ActivatedRoute,public userdetail:UsersservService){
  this.userID=activatedRouter.snapshot.params["id"]
}
  ngOnInit(): void {
    
    this.userdetail.getUserByID(this.userID).subscribe((response)=>{
      this.user=response;
     })
  }
}
