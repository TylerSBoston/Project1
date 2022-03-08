import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './employee/auth.guard';
import { LoginComponent } from './employee/login/login.component';
import { LogoutComponent } from './employee/logout/logout.component';
import { ListReimbursementComponent } from './reimbursement/list-reimbursement/list-reimbursement.component';
import { EditReimbursementComponent } from './reimbursement/edit-reimbursement/edit-reimbursement.component';
import { ViewReimbursementsComponent } from './finance-manager-view/view-reimbursements/view-reimbursements.component';
import { FinanceManagerComponent } from './finance-manager-view/finance-manager/finance-manager.component';
import { ViewEmployeesComponent } from './finance-manager-view/view-employees/view-employees.component';


const routes: Routes = [
 
  {path: "list-reimbursement",component:ListReimbursementComponent, canActivate: [AuthGuard]},
  {path: "header", component: HeaderComponent, canActivate: [AuthGuard]},
  {path: "edit-reimbursement/:idParameter", component: EditReimbursementComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "managerView", component:FinanceManagerComponent},
  {path: "managerViewReimbursements", component:ViewReimbursementsComponent},
  {path: "managerViewEmployees", component:ViewEmployeesComponent}

  //prefix with colon to tell its a route parameter
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
