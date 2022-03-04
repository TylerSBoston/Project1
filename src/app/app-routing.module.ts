import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EditRequestComponent } from './requests/edit-request/edit-request.component';
import { ListRequestComponent } from "./requests/list-request/ListRequestComponent";
import { AuthGuardGuard } from './user/auth-guard.guard';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';


const routes: Routes = [
 
  {path: "list-request",component:ListRequestComponent, canActivate: [AuthGuardGuard]},
  {path: "header", component: HeaderComponent, canActivate: [AuthGuardGuard]},
  {path: "edit-request/:idParameter", component: EditRequestComponent, canActivate: [AuthGuardGuard]},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent}

  //prefix with colon to tell its a route parameter
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
