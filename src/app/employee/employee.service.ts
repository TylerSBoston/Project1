import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private authService: AuthService) {}

  validateUser(newEmployee: Employee): Employee{
    if (newEmployee.email== "admin" && newEmployee.password=="admin" ){
      //user has logged in as admin
      //store user info in browser and mark that we have logged in
      this.authService.storeEmployee(newEmployee);
      this.authService.loggedIn = true;
      

    }else if( newEmployee.email== "rep" && newEmployee.password=="rep"){
      // user logged in as rep
      this.authService.storeEmployee(newEmployee);
      this.authService.loggedIn = true;
    }else 
      {
      

    }
    return newEmployee;
  }
}
