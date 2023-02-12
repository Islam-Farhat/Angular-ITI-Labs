import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [

  {path:"users",component:UsersComponent},
  {path:"user-details/:id",component:UserDetailsComponent,pathMatch:"prefix"},
  {path:"user-from",component:UserFormComponent},
  {path:"user-from/:id",component:UserFormComponent},
  {path:"",redirectTo:"users",pathMatch:"full"},//To write users in url
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
